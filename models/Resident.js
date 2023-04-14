import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Resident = new Schema({
    residentNum: Number,
    name: String,
    alive: Boolean,
    species: String
});

export default mongoose.model("Resident", Resident);
