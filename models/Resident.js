import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Resident = new Schema({
    id: Number,
    name: String,
    alive: Boolean,
    species: String
});

export default mongoose.model("Resident", Resident);
