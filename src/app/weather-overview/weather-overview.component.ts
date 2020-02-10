import { Component, OnInit } from "@angular/core";

import { ForecastWeatherService } from "../shared/forecast-weather-service";
import { Weather } from "../shared/weather";

@Component({
    selector: "sw-weather-overview",
    templateUrl: "./weather-overview.component.html",
    styleUrls: ["./weather-overview.component.scss"]
})
export class WeatherOverviewComponent implements OnInit {
    weather: Weather;

    constructor(private weatherService: ForecastWeatherService) { }

    ngOnInit() {
        this.weatherService.getWeather().then((weather) => {
            this.weather = weather;
        });
    }

}
