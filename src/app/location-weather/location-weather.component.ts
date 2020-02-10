import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { LocationWeather } from "../shared/weather";
import { ForecastWeatherService } from "../shared/forecast-weather-service";

@Component({
    selector: 'sw-location-weather',
    templateUrl: './location-weather.component.html',
    styleUrls: ['./location-weather.component.scss']
})
export class LocationWeatherComponent implements OnInit {
    weather: LocationWeather;

    constructor(private route: ActivatedRoute, private weatherService: ForecastWeatherService) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.weather = null;
            this.weatherService.getWeatherForLocation(params.id).then((weather) => {
                this.weather =  weather;
            });
        });
    }
}
