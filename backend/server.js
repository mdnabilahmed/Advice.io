import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import conversationRoutes from "./routes/Conversation.js"; // ✅ Lowercase "conversation"
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", conversationRoutes); // ✅ Corrected from .get()

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is live at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

startServer();
