import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Location } from "./location";

@Injectable()
export class LocationsService {

    constructor(private http: HttpClient) { }

    async getAllLocations(): Promise<Location[]> {
        const locations: any[] = await this.http.get<any[]>("https://tourism.opendatahub.bz.it/api/Location?language=en&type=mun&showall=true&locfilter=null").toPromise()
        return locations.map((location) => {
            return {
                id: location.typ + location.id,
                name: location.name
            };
        });
    }
}
