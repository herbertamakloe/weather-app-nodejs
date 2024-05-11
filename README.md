# Weather App With NodeJS

## Overview

This is a simple weather application built with Node.js and Express.js on the server-side, and vanilla JavaScript on the client-side. It retrieves weather data from the OpenWeather API based on the user's location input or geolocation data.

## Features

- **Search by City:** Users can input a city name in the search bar to get the current weather information for that city.
- **Geolocation:** Users can also enable geolocation to automatically fetch weather information based on their current location.
- **Weather Information:** The application displays temperature, weather description, feels like temperature, wind speed, and humidity for the chosen location.
- **Responsive Design:** The application is designed to be responsive and works well on different screen sizes.

## Installation

1. Clone the repository:

```
git clone https://github.com/herbertamakloe/weather-app-nodejs.git
```

2. Install dependencies:

```
cd weather-app-nodejs
npm install
```

3. Add your OpenWeather API key to the `index.js` file:

```javascript
const weatherApiKey = "YOUR_API_KEY";
```

4. Start the server:

```
npm start
```

5. Open the application in your browser:

```
http://localhost:3000
```

## Usage

- Enter a city name in the search bar and click the search button to get the current weather information for that city.
- Alternatively, allow geolocation access when prompted to fetch weather information based on your current location.

## Dependencies

- [Express.js](https://expressjs.com/): Web application framework for Node.js.
- [Axios](https://github.com/axios/axios): Promise-based HTTP client for the browser and Node.js.
- [Body-parser](https://www.npmjs.com/package/body-parser): Node.js body parsing middleware.
- [OpenWeather API](https://openweathermap.org/): Weather data API used to fetch current weather information.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

## Acknowledgments

- Weather data is retrieved from the [OpenWeatherMap API](https://openweathermap.org/api).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

By [Herbert Tamakloe](https://github.com/herbertamakloe)
