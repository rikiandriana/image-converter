import express from "express";
import { publicRouter } from "../routes/convert-route.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(publicRouter);
app.get("/", (req, res) => {
    res.send("success");
});
app.use(errorMiddleware);

export { app };
