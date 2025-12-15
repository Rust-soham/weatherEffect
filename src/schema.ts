import { Schema } from "effect";

export class Weather extends Schema.Class<Weather>("Weather")({
    name: Schema.String,
    coord: Schema.Struct({
        lon: Schema.Number,
        lat: Schema.Number
    }),
    


}) {}