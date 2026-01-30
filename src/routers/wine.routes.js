import { Router } from "express";
import * as ctl from "../controllers/wine.controller.js";

// Create the router
const winesRouter = Router();

// Define routes
winesRouter.post("/", ctl.createWine);
winesRouter.get("/", ctl.getAllWines);
winesRouter.get("/:id", ctl.getWineById);
winesRouter.put("/:id", ctl.updateWine);

// Export the router by default
export default winesRouter;
