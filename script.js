const apiKey = "20fdfb386c5a49cd073c089a2f93138b";
function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        document.getElementById("error").innerText =
            "Please enter a city name.";
        return;
    }

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(url)
    .then(response => {
    if (!response.ok) {
        throw new Error("City not found");
    }
        return response.json();
    })
    .then(data => {
            document.getElementById("cityName").innerText =
                data.name;

            document.getElementById("temperature").innerText =
                "Temperature: " + data.main.temp + " °C";

            document.getElementById("humidity").innerText =
                "Humidity: " + data.main.humidity + " %";

            document.getElementById("condition").innerText =
                "Condition: " + data.weather[0].description;

            document.getElementById("error").innerText = "";
        })
        .catch(error => {

            document.getElementById("error").innerText =
                "City not found. Please try again.";

        });
}