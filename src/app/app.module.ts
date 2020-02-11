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
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { WeatherOverviewComponent } from "./weather-overview/weather-overview.component";
import { OpenlayersMapComponent } from "./openlayers-map/openlayers-map.component";
import { MeasurementLineComponent } from "./measurement-line/measurement-line.component";
import { StationSummaryComponent } from "./station-summary/station-summary.component";
import { ForecastComponent } from "./forecast/forecast.component";
import { StationWeatherService } from "./shared/station-weather-service";
import { LocationsService } from "./shared/locations-service";
import { LocationWeatherService } from "./shared/forecast-weather-service";
import { LocationSearchComponent } from './location-search/location-search.component';
import { LocationWeatherComponent } from './location-weather/location-weather.component';

@NgModule({
    declarations: [
        AppComponent,
        WeatherOverviewComponent,
        OpenlayersMapComponent,
        MeasurementLineComponent,
        StationSummaryComponent,
        ForecastComponent,
        LocationSearchComponent,
        LocationWeatherComponent,
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
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
    ],
    providers: [ 
        StationWeatherService,
        LocationsService,
        LocationWeatherService,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
