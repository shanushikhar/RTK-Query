import express from "express";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();
const Port = process.env.PORT || 3500;
connectDB();

app.use("/api/users", router);
app.use(notFound);
app.use(errorHandler);

app.listen(Port, () => {
  console.log(
    `server is running on Port ${Port} in ${process.env.NODE_ENV} environment`
  );
});
