import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Station } from "./station";
import { Measurment } from "./measurment";

@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) { }

    getAllStations(): Promise<Station[]> {
        return this.http.get<Station[]>("http://ipchannels.integreen-life.bz.it/meteorology/rest/get-station-details").toPromise();
    }

    async getMeasurmentsForStation(station: Station): Promise<Measurment[]> {
        const dataTypes = await this.http.get<string[][]>(`http://ipchannels.integreen-life.bz.it/meteorology/rest/get-data-types?station=${station.id}`).toPromise();
        return await Promise.all(dataTypes.map(async (dataType) => {
            let measurment = new Measurment();
            measurment.unit = dataType[1];
            measurment.name = dataType[2];
            measurment.value = (await this.http.get<any>(`http://ipchannels.integreen-life.bz.it/meteorology/rest/get-newest-record?station=${station.id}&type=${dataType[0]}`).toPromise()).value;
                return measurment;
        }));
    }
}
