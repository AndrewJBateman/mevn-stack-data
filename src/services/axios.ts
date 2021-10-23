import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		"content-type": "application/json",
	},
});

export default axiosInstance;
