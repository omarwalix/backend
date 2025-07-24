import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectMongo from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
//for .env
dotenv.config();

//express
const app = express();
const PORT = process.env.PORT || 5000;

//helps
app.use(cors());
app.use(express.json());

//connect with mongo
connectMongo();

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

//running server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
