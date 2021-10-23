import axios from "./axios";
import { AxiosResponse } from "axios";

import { Cable } from "@/interfaces/Cable";

export const getCables = async (): Promise<AxiosResponse<Cable[]>> =>
	await axios.get("/cables");

export const getCable = async (id: string): Promise<AxiosResponse<Cable>> =>
	await axios.get("/cables/" + id);

export const createCable = async (cable: Cable): Promise<AxiosResponse> =>
	await axios.post("/cables", cable);

export const updateCable = async (id: string, cable: Cable) =>
	await axios.put("/cables/" + id, cable);

  export const deleteCable = async (id: string): Promise<AxiosResponse<Cable>> =>
	await axios.delete("/cables/" + id);
