import "./styles/Weather.css"

export function getWeatherData() {
    // Function to set the weather ic
    function setWeatherIcon(data) {
      let iconUrl = data.condition.icon;
      iconUrl = iconUrl.substring(20, iconUrl.length);
      const imageUrl = require(`./images${iconUrl}`);
      document.getElementsByClassName("weather__icon")[0].src = imageUrl;
    }
  
    // Weather API key and default city
    const API_KEY = "95da8a101a2b4fdb8bb185943231204";
    let city = "Tbilisi";

    const getDataFromWeatherAPI = ()=>{
         // Get weather data from Weather API
         const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
         fetch(url)
           .then(response => response.json())
           .then(data => {
             // Update weather information on the page
             document.getElementsByClassName("weather__degrees")[0].innerHTML = `${data.current.temp_c}&#176`;
             document.getElementsByClassName("weather__location")[0].innerHTML = data.location.name;
             setWeatherIcon(data.current);
           })
           .catch(error => console.log(error));
    }
    getDataFromWeatherAPI();

  
    // Callback functions for geolocation API
    const successCallback = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      city = lat+","+lng;
      getDataFromWeatherAPI();
    }
  
    const errorCallback = () => {
      // If geolocation fails, use default city
      city = "Tbilisi";
      getDataFromWeatherAPI();
    }
  
    // Get the user's location using geolocation API
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}
  
//returns weather container div;
export function WeatherContainer(){
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.classList.add("weather__icon");
  const degreesP = document.createElement("p");
  degreesP.classList.add("weather__degrees");
  degreesP.innerHTML = "13.4&#176"
  const locationP = document.createElement("p");
  locationP.classList.add("weather__location");
  locationP.innerText = "Tbilisi";
  div.append(img, degreesP, locationP);
  div.classList.add("weatherContainer");
  return div;
}