import { Component, OnInit, Input, OnChanges } from "@angular/core";

import { WeatherService } from "../shared/weather-service";
import { Station } from "../shared/station";
import { Measurement, Value } from "../shared/measurement";

@Component({
    selector: "sw-measurement-chart",
    templateUrl: "./measurement-chart.component.html",
    styleUrls: ["./measurement-chart.component.scss"]
})
export class MeasurementChartComponent implements OnInit, OnChanges {
    @Input() station: Station;
    @Input() measurement: Measurement;
    values: Value[];

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.getMeasurementValues();
    }

    ngOnChanges() {
        this.getMeasurementValues();
    }

    getMeasurementValues() {
        if(this.station && this.measurement) {
            this.weatherService.getMeasurmentsValuesForStation(this.station, this.measurement, 60*60*24*7).then((values) => {
                this.values = values;
                console.log(this.values);
            });
        }
    }

    computePoints() {

    }
}
