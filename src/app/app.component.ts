import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Location } from "./shared/location";

@Component({
    selector: "sw-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {

    constructor(private router: Router) { }

    openLocationWeather(location: Location) {
        this.router.navigate(["/location", location.id]);
    }
}
