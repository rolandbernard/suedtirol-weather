import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Location } from "./location";
import { StationWeatherService } from "./station-weather-service";

@Injectable()
export class LocationsService {
    locationToStationMap = {
        "mun4340DD4ADA4843F7857B3AC3CD1F997C": "61690SF",
        "mun9390298788614912B01D7C592D5FAD92": "50360SF",
        "mun0D67D21F08C84567A350370D1819F035": "85700MS",
        "mun5FC1C83029224AD0AD2A6D79EAB96702": "85700MS",
        "mun5D4D46A9754B4332B73B0274380617E9": "86900MS",
        "mun2C342673DCCF467BB0CC3B16F8FBBAE2": "86900MS",
        "mun413FBCB36CEB423A8F3BA3334CFC6B98": "86900MS",
        "mun6BF6D72D15284508B71179A6E458C18D": "86900MS",
        "munA9DF76FB2A2C4FD5A0420A09090F8F29": "86900MS",
        "mun64868F530C314597B0A5A9B2FBBD5730": "86900MS",
        "munBB0043517A57498683B2F997B7B68D5F": "74900MS",
        "munF5C4E9883054483AB9AB011688B64E6F": "74900MS",
        "mun97087B1501394665B4FEA6ECB5B29B37": "74900MS",
        "mun2119D9D1C4744C4E9701BF837DF63FFD": "74900MS",
        "mun07A38CBBB96D4550A6D55B48F22E224F": "74900MS",
        "munD980695AB09F4616A64A9A1794C15077": "22210MS",
        "mun4D5CF7C479D644D4B5C4FCCFAA049684": "22210MS",
        "mun68D736A09AE0484FB36B35B0AEEBA219": "25900MS",
        "mun00D33A4ACA17485E843C31580E36B2A8": "56500MS",
        "mun11DE1E602F294B44AE36F185E71CC363": "09700MS",
        "munD302C1721EAA47608676456529E7FEA9": "82200MS",
        "mun7D76788DFB264AE6A8FF8F4A064ADDE4": "85120MS",
        "munDC13D675C3224FA2ADCC387AC970C0A3": "39100MS",
        "mun2B2B22E275734BB990DE4A3FC98C6A18": "39100MS",
        "munE55B34E51B2F4BE9BF0C9EF605BD3547": "39100MS",
        "mun831F50375B3640A79E7B21C39E767C03": "88820MS",
        "munCBC29A5630B94AB984AF85F9662FD13D": "88820MS",
        "mun99A8B1D4A8D64303B1B965AA7C20FA60": "23200MS",
        "mun8895C4442AB14373945875B1CBE037A7": "23200MS",
        "mun16B18CD0EB894C839795A3A28DE34978": "23200MS",
        "mun418E5CC913764648802DD2BE30AD91AC": "23200MS",
        "munDA6754A7C6DE42D0BA1D4702301186FA": "23200MS",
        "mun27025658D62349A1BB4CE01208A42C79": "23200MS",
        "mun30F534A4D2FC4E78998EED517F788D7C": "23200MS",
        "mun4A3968C94AED49219A08575619C1EB77": "23200MS",
        "munD02121B3BA8743629DB083E73219B549": "02200MS",
        "mun8C1F2F4D6D4448409EADAFD3100A3548": "02500MS",
        "mun516EF5F9F7794997B874828DBE157E6E": "02500MS",
        "mun73F7700CAF344DDFAD46B4A296DBEC77": "65350MS",
        "munEFE24BA73A744CBB980186693578AF8C": "65600MS",
        "munF8D50DFDDAD34539897FED76E1500784": "20720WS",
        "mun1BED14B9F37B44628C341FBC921E1F20": "62600MS",
        "mun1292EAF0E46B49A4A56A75C0EEA4EDC3": "62600MS",
        "mun1465A460C04946EFAD3D479EDC3329EB": "62600MS",
        "mun50FCFD4334A04DB087C1FD10ED864018": "83200MS",
        "mun58956B90EBF743278012A8083764345B": "82910MS",
        "mun4F97133F32724CA599FEDAFED08C7773": "41000MS",
        "mun01D4DD1D1DE545C38EDF9B74387DEFCE": "43200MS",
        "munC9F8EA73E9DC456A8DB9914F0CB29324": "41000MS",
        "munC8EC77F20F4D4F3884E1B3BC77D5D699": "73500MS",
        "munF0A9687C8AC347D988A77B7BE19EEA06": "73500MS",
        "mun0EFA5D32D84D4D3DAFD366F9D6EF0CBF": "75600MS",
        "mun788CDC56BCD54A1DA9595325219E13BB": "75600MS",
        "mun1E84922B82234EE682A341531E1D1925": "65600MS",
        "munB3FD0D642BD74AE6AE952DC2548963A2": "78305MS",
        "mun1C75AFF3EA414FCF91B9299247DE6C32": "78305MS",
        "mun81A76A9381CD4A5D92C5DA51F0E9CEEB": "43200MS",
        "munCCD5827195AD4CA98B17D837EAAA4723": "43200MS",
        "munA7CA017FF0424503827BCD0E552F4648": "90000SF",
        "munA9DD8986C362423893A5047F9027A10E": "19300MS",
        "mun6C84D98E18F7402CB748D4068D322ED5": "19300MS",
        "munF6504AD16C294686A65F310809E80E1F": "59700MS",
        "munBCAFBACB231F410D832FAD3AB25C9A83": "59700MS",
        "munBFFC358F683D435C96975102F188B3C2": "59700MS",
        "munFAB945D539FB47E485EB05AD33034190": "59700MS",
        "mun5640C4FD39C44B0DBAF0E8AC1E89A6A8": "59700MS",
        "mun6A5FF36917FA48D2B1996B76C7AA8BC6": "56900MS",
        "mun2FA50B592A1B4F04BACEC021405B36CA": "85700MS",
        "mun9FF0DA1AE73E4B6F824709734DEE43B0": "07740WS",
        "mun1EC64CED24C9472BBD81C82A7A5D2070": "27100MS",
        "munB7148CE7D5104C579D5ECE6684B3B35B": "27100MS",
        "mun26E24DDA5DE84E088977E5FBA2DE23C7": "27100MS",
        "mun14C64A5225104BCD89D7FE57130DBA7D": "27100MS",
        "mun5568A7BEB57244938CE6462E0304B4FE": "27100MS",
        "mun6261F92FC0254903AE1199FDD97837BF": "27100MS",
        "munD8086690DBD64C9BBB7F6C870D9741D5": "03100MS",
        "munA4ADE30BDEE043E992555E7EC3A0F043": "61690SF",
        "mun6BAB38D3BCB84F01BB1D4573E7028EA8": "08200MS",
        "munD9300718A9E3418DAB95ABF1E88736DA": "08200MS",
        "munC1E7ED81E2AE4371BE15921F1BF9BE88": "89190MS",
        "mun6A255B413B63486EB6C58CCA73EBC068": "89190MS",
        "mun427E3B55E37D4E918AB861DEAC0C3493": "37100MS",
        "mun1864ECD1366E49ED9429F51784D8AEA2": "37100MS",
        "munF5ACB333279F42A58DC65C7466B02E5F": "37100MS",
        "munC2F074577B894247A7F521F622FDB090": "37100MS"
    };
    distMap = { };

    constructor(private http: HttpClient, private weatherService: StationWeatherService) {
        // this.calculateLocationToStationMap();
    }

    async getAllLocations(): Promise<Location[]> {
        const locations: any[] = await this.http.get<any[]>("https://tourism.opendatahub.bz.it/api/Location?language=en&type=mun&showall=true&locfilter=null").toPromise();
        return locations.map((location) => {
            return {
                id: location.typ + location.id,
                name: location.name
            };
        });
    }

    async getLocationById(id: string): Promise<Location> {
        return (await this.getAllLocations()).find((location) => location.id === id);
    }

    calculateLocationToStationMap() {
        this.weatherService.getAllStations().then((stations) => {
            stations.forEach(async (station) => {
                const typ = station.id.substr(5);
                if(typ === "MS" || typ === "SF" || typ === "WS" || typ === "SF") {
                    const locations = await this.getLocationIdsByCord(station.latitude, station.longitude);
                    locations.forEach((location) => {
                        if (this.distMap[location[0]] == null || this.distMap[location[0]] > location[1]) {
                            this.locationToStationMap[location[0]] = station.id;
                            this.distMap[location[0]] = location[1];
                        }
                    });
                }
            });
        });
    }

    async getLocationIdsByCord(lat: number, long: number): Promise<[string, number][]> {
        const locations: any[] = await this.http.get<any[]>(`https://tourism.opendatahub.bz.it/api/Municipality?elements=0&visibleinsearch=false&latitude=${lat}&longitude=${long}&radius=5000`).toPromise();
            return locations.map((location) => ["mun" + location.Id, (lat-location.Latitude)*(lat-location.Latitude) + (long-location.Longitude)*(long-location.Longitude)]);
    }

    getStationIdForLocation(location: Location): string {
        // console.log(this.locationToStationMap, this.distMap);
        return this.locationToStationMap[location.id];
    }
}
