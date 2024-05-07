//1. Import express, body-parser, axios

import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

//2. Call the express function as a constant with the variable "app"
const app = express();
const port = 3000;

//3. Use the public folder for static files
app.use(express.static("public"));
//4. Use body-parser for collecting data from form
app.use(bodyParser.urlencoded({ extended: true }));

const weatherApiKey = "04f1bb004f9171d290163e6756d7c3a2";

//5. Render page to  file to user when they request for homepage
app.get("/", (req, res) => {
  res.render("currentlocalweather.ejs");
});

//6. Handle post request for when the user enters location to know the weather there
app.post("/", async (req, res) => {
  let inputtedCity = req.body.city;

  try {
    const weatherAPI = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputtedCity}&units=metric&appid=${weatherApiKey}`
    );

    const weatherResult = weatherAPI.data;
    res.render("index.ejs", {
      weatherDescription: weatherResult.weather[0].description,
      weatherTemp: Math.round(weatherResult.main.temp),
      feelsLike: Math.round(weatherResult.main.feels_like),
      humidity: Math.round(weatherResult.main.humidity),
      wind: Math.round(weatherResult.wind.speed),
      location: weatherResult.name,
      icon: weatherResult.weather[0].icon,
    });
  } catch (error) {
    res.render("index.ejs", {
      weatherDescription: JSON.stringify(error.response.data.message),
      weatherTemp: 0,
      feelsLike: 0,
      humidity: 0,
      wind: 0,
    });
  }
});

//7. Listen for the port and start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
