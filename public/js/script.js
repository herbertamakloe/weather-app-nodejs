function getUserLocationAndWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const apiKey = "04f1bb004f9171d290163e6756d7c3a2";
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude);
      console.log(longitude);

      // Make a request to OpenWeather API with latitude and longitude as query parameters
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Weather Data:", data);
          // Handle the weather data received from OpenWeather API
          document.querySelector(".weather_description").innerHTML =
            data.weather[0].description;
          document.querySelector(".weather_temp").innerHTML = `${Math.round(
            data.main.temp
          )}°C`;
          document.querySelector(".location").innerHTML = data.name;
          document.getElementById("feels_like_value").innerHTML = `${Math.round(
            data.main.feels_like
          )}°C`;
          document.getElementById("wind_value").innerHTML = `${Math.round(
            data.wind.speed
          )}km/h`;
          document.getElementById("humidity_value").innerHTML = `${Math.round(
            data.main.humidity
          )}%`;
          let icon = data.weather[0].icon;
          if (icon == "01d") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/clear-sky.svg`;
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #4b88cc, #c6e1ff)";
          } else if (icon == "01n") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/clear-sky-night.svg`;
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #265A8D, #5CA9FF)";
          } else if (icon == "02d") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/few-clouds.svg`;
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #4b88cc, #c6e1ff)";
          } else if (icon == "02n") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/few-clouds-night.svg`;
          } else if (icon == "03d" || icon == "03n") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/scattered-clouds.svg`;
          } else if (icon == "04d" || icon == "04n") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/broken-clouds.svg`;
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #4b88cc, #c6e1ff)";
          } else if (icon == "09d" || icon == "09n") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/shower-rain.svg`;
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #265A8D, #5CA9FF)";
          } else if (icon == "10d") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/rain.svg`;

            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #265A8D, #5CA9FF)";
          } else if (icon == "10n") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/rain-night.svg`;
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #265A8D, #5CA9FF)";
          } else if (icon == "11d" || icon == "11n") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/stormy.svg`;
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #1F4163, #3B7EC3)";
          } else if (icon == "13d" || icon == "13n") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/snowing.svg`;
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #1F4163, #3B7EC3)";
          } else if (icon == "50d" || icon == "50n") {
            document.querySelector(
              ".weather_image img"
            ).src = `./images/mist.svg`;
          } else {
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #4b88cc, #c6e1ff)";
          }

          if (icon == "03n" || icon == "04n") {
            document.querySelector(".container").style.background =
              "linear-gradient(180deg, #265A8D, #5CA9FF)";
          }
        })
        .catch((error) => console.error("Error fetching weather data:", error));
    });
  } else {
    const userAgent = navigator.userAgent;
    let browserName = "";
    // Check for specific keywords in the user agent string to identify the browser
    if (userAgent.includes("Chrome")) {
      browserName = "Google Chrome";
    } else if (userAgent.includes("Firefox")) {
      browserName = "Mozilla Firefox";
    } else if (userAgent.includes("Safari")) {
      browserName = "Safari";
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident/")) {
      browserName = "Internet Explorer";
    } else if (userAgent.includes("Edge")) {
      browserName = "Microsoft Edge";
    } else {
      // If none of the above conditions match, return a generic browser name
      browserName = "Unknown Browser";
    }
    // console.log(browserName);
    alert(
      `Allow this ${browserName} to access your location to display location Weather 🌥️.`
    );

  }
}

// Calling function for user geolocation and weather
getUserLocationAndWeather();

console.log("Vanilla JavaScript running 👍🏽");
