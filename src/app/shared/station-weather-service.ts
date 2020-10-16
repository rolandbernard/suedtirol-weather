import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Station } from "./station";
import { Measurement, Value } from "./measurement";

@Injectable()
export class StationWeatherService {

    constructor(private http: HttpClient) { }

    getAllStations(): Promise<Station[]> {
        return this.http.get<Station[]>("https://ipchannels.integreen-life.bz.it/meteorology/rest/get-station-details").toPromise();
    }

    async getStationById(id: string): Promise<Station> {
        return (await this.getAllStations()).find((station) => station.id === id);
    }

    async getMeasurmentsForStation(station: Station): Promise<Measurement[]> {
        if(station) {
            const dataTypes = await this.http.get<string[][]>(`https://ipchannels.integreen-life.bz.it/meteorology/rest/get-data-types?station=${ station.id }`).toPromise();
            return await Promise.all(dataTypes.map(async (dataType) => {
                let measurment = new Measurement();
                measurment.id = dataType[0];
                measurment.unit = dataType[1];
                measurment.name = dataType[2] || dataType[0];
                const value = await this.http.get<any>(`https://ipchannels.integreen-life.bz.it/meteorology/rest/get-newest-record?station=${ station.id }&type=${ dataType[0] }`).toPromise();
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
        return this.http.get<Value[]>(`https://ipchannels.integreen-life.bz.it/meteorology/rest/get-records?station=${ station.id }&name=${ measurment.id }&seconds=${ period }`).toPromise();
    }
}
