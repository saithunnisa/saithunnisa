const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key

function getWeather() {
    const city = document.getElementById('city').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById('city-name').innerText = data.name;
                    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                    document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
                    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
                    document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
                } else {
                    alert("City not found");
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
            });
    } else {
        alert("Please enter a city name");
    }
}
