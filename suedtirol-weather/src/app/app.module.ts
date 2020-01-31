import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WeatherOverviewComponent } from "./weather-overview/weather-overview.component";

import { WeatherService } from "./shared/weather-service";
import { OpenlayersMapComponent } from './openlayers-map/openlayers-map.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherOverviewComponent,
    OpenlayersMapComponent,
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
