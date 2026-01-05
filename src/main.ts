import express from "express";
import { PORT } from "./utils/env-util";
import { publicRouter } from "./routes/public-api";
import { privateRouter } from "./routes/private-api";
import profileRouter from "./routes/profile.routes";
// import { errorMiddleware } from "./middlewares/error-middleware";
// import { privateRouter } from "./routes/private-api";

import tradeRouter from "./routes/trade.routes";

const app = express();

app.use(express.json()); // Allows us to read JSON bodies

// Register the routes
app.use(publicRouter);
app.use("/api", publicRouter);
app.use("/api", privateRouter);
app.use("/api/profile", profileRouter);
app.use("/api/trades", tradeRouter);

// Register Error Middleware (Optional, but recommended if you have the file)
// app.use(errorMiddleware);

app.listen(PORT || 3000, () => {
    console.log(`Connected to port ${PORT || 3000}`);
});