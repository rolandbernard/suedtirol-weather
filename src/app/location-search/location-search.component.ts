import { Component, OnInit, OnDestroy, EventEmitter, Output } from "@angular/core";

import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { Location } from "../shared/location";
import { LocationsService } from "../shared/locations-service";

@Component({
    selector: 'sw-location-search',
    templateUrl: './location-search.component.html',
    styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit, OnDestroy {
    foundLocations: Location[];
    locations: Location[];
    @Output() locationSelected = new EventEmitter<Location>();
    private searchTermEmitted = new EventEmitter<string>();

    constructor(private locationService: LocationsService) { }

    ngOnInit() {
        this.locationService.getAllLocations().then((locations) => {
            this.locations = locations;
        });
        this.searchTermEmitted.pipe(debounceTime(500), distinctUntilChanged()).subscribe((searchTerm) => {
            this.foundLocations = this.locations.filter((location) => location.name.toLowerCase().includes(searchTerm.toLowerCase()));
        });
    }

    ngOnDestroy() {
        this.searchTermEmitted.unsubscribe();
    }

    handleKeyEvent(searchTerm: string) {
        this.searchTermEmitted.emit(searchTerm);
    }

    handleSelectedLocation(location: Location, input: HTMLInputElement) {
        this.locationSelected.emit(location);
        input.value = "";
    }
}
