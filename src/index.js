let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";

let temperatureGl;

initialRender();

// // dislay current date
// let currentDay = days[currentTime.getDay()];
// let hours = currentTime.getHours();
// let minutes = currentTime.getMinutes();
// let formatDate = ` ${currentDay} ${hours}:${minutes}`;
// let dateEl = document.querySelector("#date");
// dateEl.innerHTML = formatDate;

// function onSubmit(event) {
//   event.preventDefault();

//   // display city
//   let searchEl = document.querySelector("#search");
//   let city = searchEl.value;
//   let h1El = document.querySelector("h1");
//   h1El.innerHTML = city;

//   // fetch temperature
//   // dispay temperature
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

//   axios.get(apiUrl).then(showWeather);
// }

// let submitEl = document.querySelector("#submit");
// submitEl.addEventListener("click", onSubmit);

// function showTemperature(response) {
//   let temperature = Math.round(response.data.main.temp);
//   let temperatureEl = document.querySelector("#temperature");
//   temperatureEl.innerHTML = `${temperature}° ${response.data.name}`;
// }

// function showWeather(response) {
//   showTemperature(response);
//   // let descriptionEl = document.querySelector("description");
//   // console.log(1111);
//   // descriptionEl.innerHTML = `${response.data.weather[0].description}`;
// }
// function showIcon(responce) {
//   let iconEl = document.querySelector("#icon");
//   iconEl.setAttribute(
//     "src",
//     `https://api.openweathermap.org/img/wn/${responce.data[0].icon}04d@2x.png`
//   );
// }

function initialRender() {
  // dislay current date
  renderInitialDate();

  // onSubmit handler
  let submitEl = document.querySelector("#submit-id");
  submitEl.addEventListener("click", onSubmit);

  let fahrenheitLinkEl = document.querySelector("#fahrenheit-link");
  fahrenheitLinkEl.addEventListener("click", displayFahrenheitTemperature);
}

function onSubmit(event) {
  event.preventDefault();

  // display city
  let searchEl = document.querySelector("#search-id");
  let city = searchEl.value;
  let h1El = document.querySelector("#h1-id");
  h1El.innerHTML = city;

  // fetch temperature
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(onSubmitRender);
}

function onSubmitRender(response) {
  renderLastUpdate(response);
  renderWeatherDescription(response);
  renderIcon(response);
  renderTemperature(response);
  renderHumidity(response);
  renderWindSpeed(response);
}

function renderInitialDate() {
  let currentTime = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[currentTime.getDay()];
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (minutes <= 9) minutes = `0${minutes}`;
  let formatDate = ` ${currentDay} ${hours}:${minutes}`;
  let dateEl = document.querySelector("#date-id");
  dateEl.innerHTML = `Last update: ${formatDate}`;
}

function renderLastUpdate(response) {
  renderInitialDate();
}
function renderWeatherDescription(response) {
  let el = document.querySelector("#description-id");
  el.innerHTML = response.data.weather[0].description;
}
function renderIcon(response) {
  let el = document.querySelector("#icon-id");
  let iconId = response.data.weather[0].icon;
  let src = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  console.log(response.data);
  el.setAttribute("src", src);
}
function renderTemperature(response) {
  let el = document.querySelector("#temperature-id");
  const temperature = Math.round(response.data.main.temp);
  el.innerHTML = temperature;
}

function renderHumidity(response) {
  let el = document.querySelector("#humidity-id");
  const humidity = response.data.main.humidity;
  el.innerHTML = `Humidity: ${humidity} %`;
}
function renderWindSpeed(response) {
  let el = document.querySelector("#wind-id");
  const windSpeed = Math.round(response.data.wind.speed);
  el.innerHTML = `Wind: ${windSpeed} km/h`;
}

// --------------------------

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-id");
  temperatureElement.innerHTML = "fooo";
  // celsiusLink.classList.remove("active");
  // fahrenheitLink.classList.add("active");
  // let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  // temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

// function displayCelsiusTemperature(event) {
//   event.preventDefault();
//   celsiusLink.classList.add("active");
//   fahrenheitLink.classList.remove("active");
//   let temperatureElement = document.querySelector("temperature");
//   temperatureElement.innerHTML = Math.round(celsiusTemperature);
// }

// let celsiusTemperature = null;

// let form = document.querySelector("#search-form");
// form.addEventListener("submit", handleSubmit);

// let fahrenheitLinkEl = document.querySelector("#fahrenheit-link");
// fahrenheitLinkEl.addEventListener("click", displayFahrenheitTemperature);

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", displayCelsiusTemperature);
// search("New York");
