import { Router } from "express";
import * as ctl from "../controllers/wine.controller.js";

// Create the router
const winesRouter = Router();

// Define routes
winesRouter.get("/", ctl.getAllWines);
winesRouter.get("/:id", ctl.getWineById);

// Export the router by default
export default winesRouter;
