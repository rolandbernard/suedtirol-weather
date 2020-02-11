
import { Forecast } from "./forecast";

export class LocationWeather {
    forecast: Forecast[];
    today: Forecast;
    name: string;
    currentTemperature: number;
    districtId: number;
}
