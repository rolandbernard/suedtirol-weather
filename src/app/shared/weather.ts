
import { Forecast } from "./forecast";

export class Weather {
    forecast: Forecast[];

    silandro: Forecast;
    merano: Forecast;
    bolzano: Forecast;
    vipiteno: Forecast;
    bressanone: Forecast;
    brunico: Forecast;
}

export class LocationWeather {
    forecast: Forecast[];
    today: Forecast;
    name: string;
}

