import { Component, OnInit } from "@angular/core";

import { WeatherService } from "../shared/weather-service";

@Component({
    selector: "sw-weather-overview",
    templateUrl: "./weather-overview.component.html",
    styleUrls: ["./weather-overview.component.scss"]
})
export class WeatherOverviewComponent implements OnInit {

    constructor(private service: WeatherService) { }

    ngOnInit() {
    }

}
