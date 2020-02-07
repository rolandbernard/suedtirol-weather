import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "ng2-charts";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatTableModule } from "@angular/material/table";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { WeatherOverviewComponent } from "./weather-overview/weather-overview.component";
import { OpenlayersMapComponent } from "./openlayers-map/openlayers-map.component";
import { MeasurementLineComponent } from "./measurement-line/measurement-line.component";
import { StationSummaryComponent } from "./station-summary/station-summary.component";
import { WeatherService } from "./shared/weather-service";

@NgModule({
    declarations: [
        AppComponent,
        WeatherOverviewComponent,
        OpenlayersMapComponent,
        MeasurementLineComponent,
        StationSummaryComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        ChartsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        FlexLayoutModule,
        MatButtonModule,
    ],
    providers: [ WeatherService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
