# Weather App With NodeJS

This is a simple weather application built using Node.js, Express.js, EJS, and Vanilla JavaScript. The app allows users to view the current weather conditions based on their location or by entering a specific city.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/herbertamakloe/weather-app-nodejs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app-nodejs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will start listening on port 3000 by default.

Once the server is running, you can access the weather app in your web browser by visiting [http://localhost:3000](http://localhost:3000).

## Features

- **Automatic Location Detection**: The app automatically detects the user's location based on their IP address and displays the current weather conditions.
- **Search by City**: Users can enter a specific city name to view the weather conditions for that location.
- **Responsive Design**: The app is designed to be responsive and works well on both desktop and mobile devices.

## Technologies Used

- **Node.js**: A JavaScript runtime environment used for building server-side applications.
- **Express.js**: A web application framework for Node.js used for building web applications and APIs.
- **EJS (Embedded JavaScript)**: A simple templating language that lets you generate HTML markup with plain JavaScript.
- **Vanilla JavaScript**: Used for client-side scripting to enhance user interactions and dynamically update the UI.
- **Axios**: A promise-based HTTP client for making HTTP requests from Node.js.

## File Structure

- **index.js**: The main server file responsible for handling routes, rendering EJS templates, and interacting with the OpenWeatherMap API.
- **views/index.ejs**: The EJS template file containing the HTML structure of the weather app.
- **public/css/main.css**: The CSS file containing the styles for the weather app UI.
- **public/images**: The images folder containing the images used for the weather app UI. All the images were designed by me.

## Acknowledgments

- Weather data is retrieved from the [OpenWeatherMap API](https://openweathermap.org/api).
- Location data is retrieved from the [IPGeolocation API](https://ipgeolocation.io/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

By [Herbert Tamakloe](https://github.com/herbertamakloe)
