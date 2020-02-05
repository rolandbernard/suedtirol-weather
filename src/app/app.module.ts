import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTableModule } from "@angular/material/table";

import { WeatherOverviewComponent } from "./weather-overview/weather-overview.component";
import { OpenlayersMapComponent } from "./openlayers-map/openlayers-map.component";
import { MeasurementChartComponent } from "./measurement-chart/measurement-chart.component";
import { StationSummaryComponent } from "./station-summary/station-summary.component";
import { WeatherService } from "./shared/weather-service";

@NgModule({
    declarations: [
        AppComponent,
        WeatherOverviewComponent,
        OpenlayersMapComponent,
        MeasurementChartComponent,
        StationSummaryComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
    ],
    providers: [ WeatherService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
