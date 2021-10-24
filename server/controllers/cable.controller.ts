import { Request, Response } from "express";

import Cable from "../models/Cable";

// Find all cables
export const displayAllCablesHandler = async (req: Request, res: Response): Promise<any> => {
	try {
		const cables = await Cable.find();
		if (!cables) {
			return res.status(404).json({
				message: "Cables not found",
			});
		}
		res.json(cables);
	} catch (error) {
		return res.status(500).send(error);
	}
};

// Add cable to cables database
export const createCableHandler = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
	try {
		const { drum, ref, notes } = req.body;
		const cable = new Cable({ drum, ref, notes });
		await cable.save();
		return  res.json(cable);
	} catch (error) {
		return res.status(500).send(error);
	}
};

// Find a cable by id
export const findCableHandler = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
	try {
		const cable = await Cable.findById(req.params.id);
		if (!cable)
			return res.status(404).json({
				message: "Cable not found",
			});

		return res.send(cable);
	} catch (error) {
		return res.status(500).send(error);
	}
};

// Delete cable from database by id
export const deleteCableHandler = async (req: Request, res: Response): Promise<Response<any, Record<string, any>> | void> => {
	try {
    const cable = await Cable.findByIdAndDelete(req.params.id);
		if (!cable)
			return res.status(404).json({
				message: "Cable not found",
			});
    const cables = await Cable.find();
		return res.json(cables).redirect("/");
	} catch (error) {
		return res.status(500).send(error);
	}
};

// Update cable by id
export const updateCableHandler = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
	try {
		const updatedCable = await Cable.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		if (!updatedCable) {
			return res.status(404).json({
				message: "Cable to be updated was not found",
			});
		}
		return res.json(updatedCable);
	} catch (error) {
		return res.status(500).send(error);
	}
};
