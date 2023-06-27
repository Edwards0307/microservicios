import { Router } from "express"
import controllers from "../controllers/index.js";

const router = Router();

router.get("/", controllers.getPlanets);
router.post("/", controllers.postPlanets);

export default router;