import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import cableRoutes from "./routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", cableRoutes);
app.use(express.static(path.join(__dirname, "..", "..", "dist")));

export default app;
