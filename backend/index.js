import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import { databaseConnect } from "./db/dbConfig.js";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

databaseConnect();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req,res) => {
  res.send("Jay shree ram");
})
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
