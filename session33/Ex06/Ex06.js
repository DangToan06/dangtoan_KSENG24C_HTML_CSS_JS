const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

function displayWeather(city, data) {
    document.getElementById("cityName").textContent = city;
    document.getElementById("tempValue").textContent = `${data.temperature}°C`;
    document.getElementById("weatherDesc").textContent = data.description;
    document.getElementById("humidityValue").textContent = `Độ ẩm: ${data.humidity}%`;
    document.getElementById("windSpeed").textContent = `Tốc độ gió: ${data.windSpeed} km/h`;
    document.getElementById("weatherIcon").textContent = data.icon;
}

function displayError(message) {
    document.getElementById("weatherInfo").innerHTML = `<p class="error-message">${message}</p>`;
}

function searchWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    if (cityInput === "") {
        displayError("Vui lòng nhập tên thành phố!");
        return;
    }
    const city = Object.keys(weatherData).find(key => key.toLowerCase() === cityInput.toLowerCase());
    if (city) {
        document.getElementById("weatherInfo").innerHTML = `
            <h2 id="cityName"></h2>
            <div class="weather-details">
                <div class="weather-main">
                    <span id="weatherIcon"></span>
                    <p id="tempValue"></p>
                </div>
                <div id="weather-detail-2">
                    <p id="weatherDesc"></p>
                    <p id="humidityValue"></p>
                    <p id="windSpeed"></p>
                </div>
            </div>
        `;
        displayWeather(city, weatherData[city]);
    } else {
        displayError("Không tìm thấy dữ liệu thời tiết cho thành phố này!");
    }
}

document.getElementById("cityInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchWeather();
    }
});