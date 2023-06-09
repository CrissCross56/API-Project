import mongoose from "mongoose";
import chalk from "chalk";

const MONGODB_URI = process.env.PROD_MONGODB || "mongodb://127.0.01:27017/API-Project"

//this is for model.findByIdAndUpdate method, specifically so that new: true is the default
mongoose.set("returnOriginal", false)

mongoose.connect(MONGODB_URI)
.catch((error) => console.log("Error connecting to MongoDB: ", error.message));

mongoose.connection.on("disconnected", ()=> console.log(chalk.bold("Disconnected from MongoDB")))

mongoose.connection.on("error", (error) => console.error(chalk.red(`MongoDB connection error: ${error}`)))

export default mongoose.connection;