import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Station } from "./station";
import { Measurement, Value } from "./measurement";

@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) { }

    getAllStations(): Promise<Station[]> {
        return this.http.get<Station[]>("http://ipchannels.integreen-life.bz.it/meteorology/rest/get-station-details").toPromise();
    }

    async getMeasurmentsForStation(station: Station): Promise<Measurement[]> {
        if(station) {
            const dataTypes = await this.http.get<string[][]>(`http://ipchannels.integreen-life.bz.it/meteorology/rest/get-data-types?station=${ station.id }`).toPromise();
            return await Promise.all(dataTypes.map(async (dataType) => {
                let measurment = new Measurement();
                measurment.id = dataType[0];
                measurment.unit = dataType[1];
                measurment.name = dataType[2] || dataType[0];
                const value = await this.http.get<any>(`http://ipchannels.integreen-life.bz.it/meteorology/rest/get-newest-record?station=${ station.id }&type=${ dataType[0] }`).toPromise();
                if(value !== null) {
                    measurment.value = value.value;
                }
                return measurment;
            }));
        } else {
            return [];
        }
    }

    getMeasurmentsValuesForStation(station: Station, measurment: Measurement, period: number): Promise<Value[]> {
        return this.http.get<Value[]>(`http://ipchannels.integreen-life.bz.it/meteorology/rest/get-records?station=${ station.id }&name=${ measurment.id }&seconds=${ period }`).toPromise();
    }
}
