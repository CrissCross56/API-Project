import {Router} from 'express';
//import the routes
import residentsRoute from "./residents.js"
const router = Router();

//define the routes, and what functions to call when the right thinfs are passed
router.get("/", (req,res) => send("This is the API Root"));
router.use("/residents", residentsRoute);

export default router;