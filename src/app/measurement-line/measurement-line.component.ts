import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Color, Label } from "ng2-charts";

import { WeatherService } from "../shared/weather-service";
import { Station } from "../shared/station";
import { Measurement, Value } from "../shared/measurement";

@Component({
    selector: "sw-measurement-line",
    templateUrl: "./measurement-line.component.html",
    styleUrls: ["./measurement-line.component.scss"]
})
export class MeasurementLineComponent implements OnInit, OnChanges {
    lineChartData: ChartDataSets[] = [
        { data: [ ], label: "" },
    ];
    lineChartLabels: Label[] = [ ];
    lineChartOptions: ChartOptions = {
        responsive: true,
    };
    lineChartColors: Color[] = [
        {
            borderColor: "black",
            backgroundColor: "rgba(255,0,0,0.3)",
        },
    ];
    lineChartLegend = false;
    lineChartType: ChartType = "line";
    lineChartPlugins = [ ];

    @Input() station: Station;
    @Input() measurement: Measurement;
    values: Value[] = null;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.getMeasurementValues();
    }

    ngOnChanges() {
        this.values = null;
        this.getMeasurementValues();
    }

    getMeasurementValues() {
        if(this.station && this.measurement) {
            this.values = [ ];
            this.lineChartData[0].data = [ ];
            this.lineChartLabels = [ ];
            this.weatherService.getMeasurmentsValuesForStation(this.station, this.measurement, 60*60*24*7).then((values) => {
                values.forEach((value) => {
                    this.lineChartData[0].data.push(value.value);
                    this.lineChartLabels.push((new Date(value.timestamp)).toLocaleDateString());
                });
                this.values = values;
                console.log(this.values);
            });
        }
    }

}
