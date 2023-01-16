let weather = {
    apiKey: "235241fdcb0a14c27cfa6197ac8a0595",
    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
         + city
         + "&units=metric&appid="
         + this.apiKey
        )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data));
        },
        displayWeather: function(data) {
            const { name } = data;
            const { icon } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;
            document.querySelector(".cidade").innerText = "Temperatura em " + name
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".temp").innerText = Math.round(temp) + "°C";
            document.querySelector(".humidade").innerText = "Humidade: " + humidity + "%";
            document.querySelector(".vento").innerText = "Velocidade do Vento: " + speed + "Km/h"
            document.querySelector(".weather").classList.remove("loading");
            document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920×1080/? " + name + "')"
        },
        search: function () {
            this.fetchWeather(document.querySelector(".search-bar").value);
        },
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("belo horizonte");