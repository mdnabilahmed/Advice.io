import express from "express";
import axios from "axios";
import Conversation from "../models/Conversation.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const GOOGLE_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";


const GOOGLE_API_KEY = process.env.API_KEY;

router.post("/dashboard", async (req, res) => {
  const { prompt } = req.body;

  try {
    const { data } = await axios.post(
      `${GOOGLE_API_URL}?key=${GOOGLE_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }
    );

    const responseText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    const saved = await Conversation.create({
      prompt,
      response: responseText,
    });

    res.json(saved);
  } catch (err) {
    console.error("Gemini API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to generate response." });
  }
});

export default router;
