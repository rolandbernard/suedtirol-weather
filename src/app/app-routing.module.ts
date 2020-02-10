import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenlayersMapComponent } from "./openlayers-map/openlayers-map.component";
import { WeatherOverviewComponent } from "./weather-overview/weather-overview.component";
import { AboutComponent } from "./about/about.component";
import { LocationWeatherComponent } from "./location-weather/location-weather.component";

const routes: Routes = [
    { path: "", redirectTo: "/overview", pathMatch: "full" },
    { path: "overview", component: WeatherOverviewComponent },
    { path: "stations", component: OpenlayersMapComponent },
    { path: "about", component: AboutComponent },
    { path: "location/:id", component: LocationWeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
