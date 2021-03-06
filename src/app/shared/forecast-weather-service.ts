import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Forecast, toWeatherCode, toImageURL } from "./forecast";
import { Weather } from "./weather";
import { Location } from "./location";
import { LocationWeather } from "./location-weather";
import { LocationsService } from "./locations-service";
import { StationWeatherService } from "./station-weather-service";

function toForecast(rawForecast: any): Forecast {
    const forecast: Forecast = new Forecast();
    if (rawForecast.MinTemp != null) {
        forecast.date = new Date(rawForecast.date);
        forecast.maxTemp = rawForecast.MaxTemp == null ? rawForecast.Maxtemp : rawForecast.MaxTemp;
        forecast.minTemp = rawForecast.MinTemp;
        forecast.weatherDesc = rawForecast.WeatherDesc;
        forecast.weatherCode = toWeatherCode(rawForecast.WeatherCode);
        forecast.imageURL = toImageURL(forecast.weatherCode);
        if (rawForecast.CityName) {
            forecast.name = rawForecast.CityName;
        }
    } else {
        forecast.date = new Date(rawForecast.date);
        forecast.maxTemp = rawForecast.TempMaxmax;
        forecast.minTemp = rawForecast.TempMinmin;
        forecast.weatherDesc = rawForecast.Weatherdesc;
        forecast.weatherCode = toWeatherCode(rawForecast.Weathercode);
        forecast.imageURL = toImageURL(forecast.weatherCode);
        forecast.reliability = rawForecast.Reliability;
    }
    return forecast;
}

@Injectable()
export class LocationWeatherService {

    constructor(private http: HttpClient, private weatherService: StationWeatherService, private locationsService: LocationsService) { }

    async getWeather(): Promise<Weather> {
        const rawWeather: any = await this.http.get<any>("https://tourism.opendatahub.bz.it/api/Weather?language=en").toPromise();
        const weather: Weather = new Weather();
        weather.forecast = rawWeather.Forecast.map((rawForecast) => toForecast(rawForecast));
        weather.silandro = toForecast(rawWeather.Stationdata[0]);
        weather.merano = toForecast(rawWeather.Stationdata[1]);
        weather.bolzano = toForecast(rawWeather.Stationdata[2]);
        weather.vipiteno = toForecast(rawWeather.Stationdata[3]);
        weather.bressanone = toForecast(rawWeather.Stationdata[4]);
        weather.brunico = toForecast(rawWeather.Stationdata[5]);
        return weather;
    }

    async getWeatherForLocation(location: Location): Promise<LocationWeather> {
        const rawWeather: any = await this.http.get<any>(`https://tourism.opendatahub.bz.it/api/Weather/District?locfilter=${location.id}&language=en`).toPromise();
            const weather: LocationWeather = new LocationWeather();
        weather.districtId = rawWeather.Id;
        weather.forecast = rawWeather.BezirksForecast.slice(1).map((rawForecast) => toForecast(rawForecast));
        weather.today = toForecast(rawWeather.BezirksForecast[0]);
        weather.name = rawWeather.DistrictName;
        const station = await this.weatherService.getStationById(this.locationsService.getStationIdForLocation(location));
        if (station) {
            weather.currentTemperature = (await this.weatherService.getMeasurmentsForStation(station))
                .find((measurment) => measurment.id.toLowerCase().includes("temperature")).value;
        }
        return weather;
    }
}
