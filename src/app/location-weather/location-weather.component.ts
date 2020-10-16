import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Location } from "../shared/location";
import { LocationWeather } from "../shared/location-weather";
import { LocationWeatherService } from "../shared/forecast-weather-service";
import { LocationsService } from "../shared/locations-service";

@Component({
    selector: 'sw-location-weather',
    templateUrl: './location-weather.component.html',
    styleUrls: ['./location-weather.component.scss']
})
export class LocationWeatherComponent implements OnInit {
    weather: LocationWeather;
    location: Location;

    constructor(private route: ActivatedRoute, private weatherService: LocationWeatherService, private locationsService: LocationsService) { }

    getBaseUrl() {
        return document.getElementsByTagName('base')[0].href;
    }
    
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.weather = null;
            this.location = null;
            this.locationsService.getLocationById(params.id).then((location) => {
                this.location = location;
                this.weatherService.getWeatherForLocation(location).then((weather) => {
                    this.weather =  weather;
                });
            });
        });
    }
}
