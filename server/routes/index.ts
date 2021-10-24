import { Router } from "express";

import {
	displayAllCablesHandler,
	createCableHandler,
	findCableHandler,
	deleteCableHandler,
  updateCableHandler
} from "../controllers/cable.controller";

const router = Router();

// Cable routes
router.get("/cables", displayAllCablesHandler);
router.post("/cables", createCableHandler);
router.get("/cables/:id", findCableHandler);
router.delete("/cables/:id", deleteCableHandler);
router.put("/cables/:id", updateCableHandler);

export default router;
