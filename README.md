# 🌦️ SkyBuddy Weather Dashboard - Backend

This repository contains the **backend proxy server** for the SkyBuddy Weather Dashboard. 

The backend securely handles requests to the external weather API, protecting sensitive API keys and serving weather data to the frontend application.

---

## Features

- **Secure API Proxy**: Fetches weather data from the 
WeatherAPI without exposing the API key to the client. 

- **Environment Variables**: Stores the API key securely in a `.env` file.  

- **Data Sanitization**: Returns only the necessary weather data to the frontend.  

- **Deployment Ready**: Can be deployed on platforms like Vercel, Railway, or Heroku.  

---

## Development Process

1. **Initial Setup**: Created a simple Node.js/Express server.  

2. **Environment Configuration**: Stored the API key in `.env` and loaded it securely using `dotenv`.  

3. **Proxy Endpoint**: Implemented an endpoint that receives frontend requests, forwards them to the WeatherAPI, and returns the response.  

4. **Testing**: Verified that the API key is never exposed to the frontend and that weather data is correctly returned.  

5. **Deployment**: Configured the backend for deployment on Railway, ensuring environment variables are properly set in production.  

---

## Usage

1. Clone the repository:  
   ```bash
   git clone https://github.com/sithulikaluarachchi/skybuddy-backend-proxy.git
   ```

2. install dependencies:
   ```
   npm install
   ```

3. Create a free account on **WeatherAPI:** https://www.weatherapi.com/
 and obtain an API key.

4. Rename the .env.example file to .env and update it with your API key:
   ``` 
    WEATHER_API_KEY=YOUR_API_KEY
    PORT= 5000
   ```

5. Start the server
   ```
   npm start
   ```
---

**Note: This backend is intended to be used with the SkyBuddy frontend application.**