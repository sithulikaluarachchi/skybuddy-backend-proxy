import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so frontend can call this backend
app.use(cors());

// Weather proxy route
app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({ error: "City query parameter is required" });
    }

    // Fetch 3 days forecast (today + next 2 days)
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;

    const response = await fetch(url);
    const data = await response.json();

    // Handle API errors
    if (data.error) {
      return res.status(400).json(data.error);
    }

    // Send full JSON back to frontend
    res.json(data);

  } catch (error) {
    console.error("Backend fetch error:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend proxy running at http://localhost:${PORT}`);
});
