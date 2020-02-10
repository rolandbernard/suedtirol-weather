
export enum WeatherCode {
    Sunny,
    PartlyCloudy,
    Cloudy,
    Rain,
    HeavyRain,
    Snow,
    HeavySnow,
    Sleet,
    Fog,
    Storm,
}

export function toImageURL(code: WeatherCode): string {
    const mapping = [
        [ WeatherCode.Sunny,  "/assets/sunny.svg" ],
        [ WeatherCode.PartlyCloudy,  "/assets/partly-cloudy.svg" ],
        [ WeatherCode.Cloudy,  "/assets/cloudy.svg" ],
        [ WeatherCode.Rain,  "/assets/rain.svg" ],
        [ WeatherCode.HeavyRain,  "/assets/heavy-rain.svg" ],
        [ WeatherCode.Snow,  "/assets/snow.svg" ],
        [ WeatherCode.HeavySnow,  "/assets/heavy-snow.svg" ],
        [ WeatherCode.Sleet,  "/assets/sleet.svg" ],
        [ WeatherCode.Fog,  "/assets/fog.svg" ],
        [ WeatherCode.Storm,  "/assets/storm.svg" ],
    ];
    const entry: string[] = mapping.find((opt) => opt[0] === code) as string[];
    if (entry) {
        return entry[1];
    } else {
        return null;
    }
}

export function toWeatherCode(code: string): WeatherCode {
    const mapping = {
        "a": WeatherCode.Sunny,
        "b": WeatherCode.PartlyCloudy,
        "c": WeatherCode.Cloudy,
        "d": WeatherCode.Cloudy,
        "e": WeatherCode.Cloudy,
        "f": WeatherCode.Rain,
        "g": WeatherCode.HeavyRain,
        "h": WeatherCode.Rain,
        "i": WeatherCode.HeavyRain,
        "j": WeatherCode.Rain,
        "k": WeatherCode.Cloudy,
        "l": WeatherCode.Snow,
        "m": WeatherCode.HeavySnow,
        "n": WeatherCode.Snow,
        "o": WeatherCode.HeavySnow,
        "p": WeatherCode.HeavySnow,
        "q": WeatherCode.Sleet,
        "r": WeatherCode.Sleet,
        "s": WeatherCode.Fog,
        "t": WeatherCode.Fog,
        "u": WeatherCode.Storm,
        "v": WeatherCode.Storm,
        "w": WeatherCode.Storm,
        "x": WeatherCode.Storm,
        "y": WeatherCode.Storm,
        "z": WeatherCode.Storm,
    };
    return mapping[code];
}

export class Forecast {
    name: string;
    date: Date;
    minTemp: number;
    maxTemp: number;
    weatherDesc: string;
    weatherCode: WeatherCode;
    reliability: number;
    imageURL: string;
}

