import express from "express";
import { PORT } from "./utils/env-util";
import { publicRouter } from "./routes/public-api";
import { privateRouter } from "./routes/private-api";
import profileRouter from "./routes/profile.routes";
import tradeRouter from "./routes/trade.routes";
import { errorMiddleware } from "./middlewares/error-middleware";
// import { privateRouter } from "./routes/private-api";

const app = express();

app.use(express.json()); // Allows us to read JSON bodies

// Register the routes
app.use(publicRouter);
app.use("/api", publicRouter)
app.use("/api", privateRouter)
app.use("/api/profile", profileRouter);
app.use("/api/trades", tradeRouter);
// Register Error Middleware (Optional, but recommended if you have the file)
app.use(errorMiddleware);

const port = Number(PORT) || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Connected to port ${port}`);
});