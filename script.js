// // Fetching weather data and converted to json.
// const getWeather = async () => {
//     try {
//         const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=966881349119fc14f6f3831c44ff9b53", { method: 'GET' });

//         const data = await response.json();

//         console.log(data)

//         document.getElementById("city-name").innerText = data.name;
//         document.getElementById("temperature").innerText = data.main.temp;
//         document.getElementById("weather").innerText = data.weather[0].main;
//     } catch {
//         console.error("Could not get weather data");
//     }
// }
// getWeather();


// Fetching weather data and converted to json.
const getWeather = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=966881349119fc14f6f3831c44ff9b53", { method: 'GET' });

        const data = await response.json();

        console.log(data)

        const forecast = data.list[0];

        document.getElementById("weather").innerText = forecast.weather[0].main;

        const temperature = data.list[0].main.temp;
        const temperatureNumber = parseInt(temperature);
        document.getElementById("temperature").innerText = temperatureNumber;
    } catch {
        console.error("Could not get weather data");
    }
}
getWeather();


const getSun = async () => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=6cf9113cc039128887bea41cc4117942", { method: 'GET'});
        const data = await response.json();
        console.log(data)

        const sunrise = data.sys.sunrise;
        console.log("sunrise:", sunrise);
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        console.log("Sunrise:", sunriseTime);
        const sunriseTimeText = "sunrise: " + sunriseTime;
        document.getElementById("sunrise").innerText = sunriseTimeText;

        const sunset = data.sys.sunset;
        console.log("sunset:", sunset);
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        console.log("Sunset:", sunsetTime);
        const sunsetTimeText = "sunset: " + sunsetTime;
        document.getElementById("sunset").innerText = sunsetTimeText;


    } catch {
        console.error("Could not get weather data");
    }
}

getSun();




document.addEventListener("DOMContentLoaded", function () {
    // Call the getWeatherDescription function to set the "description" element to "apple"
    const weatherDescription = "Clear"; // Replace with the actual weather description
    getWeatherDescription(weatherDescription);
});

// Function to set the "description" element based on weather description
const getWeatherDescription = (weatherDescription) => {
    let weatherText;

    if (weatherDescription === "Clear") {
        weatherText = "Get your sunnies on. Stockholm is looking rather great today.";
    } else if (weatherDescription === "Rain") {
        weatherText = "Don't forget your umbrella. It's wet in Stockholm today.";
    } else if (weatherDescription === "Clouds") {
        weatherText = "Light a fire and get cosy. Stockholm is looking grey today.";
    } else {
        weatherText = "Weather condition not recognized.";
    }

    // Display the weather description on the web page with the id "description"
    document.getElementById("description").innerText = weatherText;

    // Return the weather description text (optional)
    return weatherText;
};

