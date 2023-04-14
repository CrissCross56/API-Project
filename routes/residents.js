import {Router} from "express";
import * as controllers from "../controllers/residents.js"

const router = Router();

router.get("/", controllers.getResidents);
router.get("/:id", controllers.getResident);
router.get("/name/:firstName", controllers.getCertainResident);
router.post("/", controllers.createResident);
router.put("/", controllers.updateResident);
router.delete("/:id", controllers.deleteResident);
router.delete("/name/:firstName", controllers.deleteCertainResident);

export default router;