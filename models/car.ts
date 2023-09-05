import {model, models, Schema} from "mongoose";
import {Fuel} from "@/types";

const CarSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    city_mpg: Number,
    class: String,
    combination_mpg: Number,
    cylinders: Number,
    displacement: Number,
    drive: String,
    fuel_type: String,
    highway_mpg: Number,
    make: String,
    model: String,
    transmission: String,
    year: Number,
})

const Car = models.Car || model('Car', CarSchema)

export default Car
