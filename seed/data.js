import db from "../db/connection.js"
//import models and the json, json files should be in the seed folder
import Resident from "../models/Resident.js"
import data from "./data.json" assert {type: "json"}
const insertData = async () => {
    //reset database
    await db.dropDatabase();

    //insert data into data base, insert the models
    await Resident.insertMany(data)

    //close Database
    db.close()
}

insertData();
