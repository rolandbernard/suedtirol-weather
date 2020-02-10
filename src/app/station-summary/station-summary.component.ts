import { Component, OnInit, OnChanges, Input } from "@angular/core";

import { Station } from "../shared/station";
import { Measurement } from "../shared/measurement";
import { StationWeatherService } from "../shared/station-weather-service";

@Component({
    selector: "sw-station-summary",
    templateUrl: "./station-summary.component.html",
    styleUrls: ["./station-summary.component.scss"]
})
export class StationSummaryComponent implements OnInit, OnChanges {
    @Input() station: Station = null;
    measurements: Measurement[] = [];

    displayedMeasurement: Measurement;

    constructor(private weatherService: StationWeatherService) { }

    ngOnInit() {
        this.getCurrentMeasurements();
    }

    ngOnChanges() {
        this.displayedMeasurement = null;
        this.getCurrentMeasurements();
    }

    getCurrentMeasurements() {
        this.measurements = [];
        this.weatherService.getMeasurmentsForStation(this.station).then((measurements) => {
            this.measurements = measurements;
        });
    }

    handleTableClick(event: MouseEvent, measurement: Measurement) {
        this.displayedMeasurement = measurement;
    }
}
