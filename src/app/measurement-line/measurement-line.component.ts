import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType, ChartPoint } from "chart.js";
import { Color } from "ng2-charts";

import { StationWeatherService } from "../shared/station-weather-service";
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
    lineChartOptions: ChartOptions = {
        responsive: true,
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day'
                }
            }]
        }
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

    constructor(private weatherService: StationWeatherService) { }

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
            this.weatherService.getMeasurmentsValuesForStation(this.station, this.measurement, 60*60*24*7).then((values) => {
                this.lineChartData[0].data = values.map((value) => {
                    const point: ChartPoint = {y: value.value, t: new Date(value.timestamp)};
                    return point as (number & ChartPoint);
                });
                this.lineChartData[0].label = this.measurement.name;
                if (values.length > 0) {
                    this.values = values;
                } else {
                    this.values = null;
                }
            });
        }
    }

}
