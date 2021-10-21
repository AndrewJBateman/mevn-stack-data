import { Router } from "express";
import Cable from "../models/Cable";

const router = Router();

// GET all cables
router.get("/cables", async (req, res) => {
	const cables = await Cable.find();
	res.send(cables);
});

// POST a cable to cables database
router.post("/cables", async (req, res) => {
	const { drum, ref, notes } = req.body;
	const cable = new Cable({ drum, ref, notes });

	await cable.save();
	res.json(cable);
});

// GET a cable specified by id
router.get("/cables/:id", async (req, res) => {
	try {
		const cable = await Cable.findById(req.params.id);
		if (!cable)
			return res.status(404).json({
				message: "Cable not found",
			});

		res.send(cable);
	} catch (error) {
		return res.status(500).send(error);
	}
});

// DELETE a cable from database, specified by id
router.delete("/cables/:id", async (req, res) => {
	try {
		const cable = await Cable.findByIdAndDelete(req.params.id);
		if (!cable)
			return res.status(404).json({
				message: "Cable not found",
			});

		return res.json(cable);
	} catch (error) {
		return res.status(500).send(error);
	}
});

// PUT a modified cable record in database, identified by id
router.put("/cables/:id", async (req, res) => {
	const updatedCable = await Cable.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.json(updatedCable);
});

export default router;
