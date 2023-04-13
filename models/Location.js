import mongoose from "mongoose";

const Schema = mongoose.Schemal;

let Location = new Schema({
    name: String,
    type: String,
    dimension: String,
    residents: [{type: personSchema}]
});

 
export default mongoose.model("Location", Location);