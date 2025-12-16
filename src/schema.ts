import { Schema } from "effect";

export class Weather extends Schema.Class<Weather>("Weather")({
    name: Schema.String,

    coord: Schema.Struct({
        lon: Schema.Number,
        lat: Schema.Number
    }),

    weather: Schema.NonEmptyArrayEnsure(
        Schema.Struct({
            main: Schema.String,
            description: Schema.String
        })
    ),

    main: Schema.Struct({
        temp: Schema.Number,
        feelsLike: Schema.Number,
        tempMin: Schema.Number,
        tempMax: Schema.Number,
        humidity: Schema.Number,
        pressure: Schema.Number
    }),
    
    wind: Schema.Struct({
        speed: Schema.Number,
        deg: Schema.Number,
    }),

    sys: Schema.Struct({
        country: Schema.String
    })

}) {}


