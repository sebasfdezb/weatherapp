const apiKey = "e403d9d71a1800a977f62b75912ffc5a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML =  Math.round(data.main.temp) + "°c";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

	if (data.weather[0].main == "Clouds"){
		weatherIcon.src = "img/cloudy.png"
	}
	else if(data.weather[0].main == "Clear"){
		weatherIcon.src = "img/sun.png"
	}
	else if(data.weather[0].main == "Rain"){
		weatherIcon.src = "img/rainy.png"
	}
	else if(data.weather[0].main == "Mist"){
		weatherIcon.src = "img/mist.png"
	}
	else if(data.weather[0].main == "Snow"){
		weatherIcon.src = "img/snow.png"
	}

	document.querySelector(".weather").style.display = "block";
	document.querySelector(".sebas").style.display = "block";
}

searchButn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});