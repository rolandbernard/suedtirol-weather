import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "ng2-charts";

import { MatTableModule } from "@angular/material/table";

import { WeatherOverviewComponent } from "./weather-overview/weather-overview.component";
import { OpenlayersMapComponent } from "./openlayers-map/openlayers-map.component";
import { StationSummaryComponent } from "./station-summary/station-summary.component";
import { WeatherService } from "./shared/weather-service";

@NgModule({
    declarations: [
        AppComponent,
        WeatherOverviewComponent,
        OpenlayersMapComponent,
        StationSummaryComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        ChartsModule,
    ],
    providers: [ WeatherService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
