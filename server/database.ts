import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config();

const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_ADDRESS}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export const startConnection = async () => {
	try {
		const db = await connect(dbUrl);
		console.log("connected to database:", db.connection.name);
	} catch (error) {
		console.log("error: ", error);
	}
};
