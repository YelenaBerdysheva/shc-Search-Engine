let currentTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let units = "metric";

// dislay current date
let currentDay = days[currentTime.getDay()];
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let formattedDate = ` ${currentDay} ${hours}:${minutes}`;
let dateEl = document.querySelector("#date")
dateEl.innerHTML = formattedDate;

function onSubmit(event){
  event.preventDefault()
  
  // display city
  let searchEl = document.querySelector("#search")
  let city = searchEl.value
  let h1El = document.querySelector("h1")
  h1El.innerHTML = city;

  // fetch temperature
  // dispay temperature
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
  axios.get(apiUrl).then(showTemperature);
}

let submitEl = document.querySelector("#submit")
submitEl.addEventListener("click",onSubmit)

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureEl = document.querySelector("#temperature");
  temperatureEl.innerHTML = temperature
}

function showWeather(response) {
  let temperature = document.querySelector("temperature");
  temperature.innerHTML = ` ${temperature}° ${response.data.name}`;
}
