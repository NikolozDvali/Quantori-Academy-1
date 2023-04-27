import './weather.css';
import { useEffect } from 'react';
import { Position } from '../../interface';

export default function Weather() {
  useEffect(() => {
    getWeatherData();
  }, []);

  function getWeatherData() {
            // Function to set the weather icon
            function setWeatherIcon(data: any): void {
                let iconUrl = data.condition.icon;
                iconUrl = iconUrl.substring(34, iconUrl.length);
                import(`./assets${iconUrl}`).then((image) => {
                  (document.getElementsByClassName(
                    "weather__icon"
                  )[0] as HTMLImageElement).src = image.default;
                });
              }
              

        // Weather API key and default city
        const API_KEY: string = "95da8a101a2b4fdb8bb185943231204";
        let city: string = "Tbilisi";

        const getDataFromWeatherAPI = (): void => {
            // Get weather data from Weather API
            const url: string = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // Update weather information on the page
                (document.getElementsByClassName("weather__degrees")[0] as HTMLParagraphElement).innerHTML = `${data.current.temp_c}&#176`;
                (document.getElementsByClassName("weather__location")[0] as HTMLParagraphElement).innerHTML = data.location.name;
                setWeatherIcon(data.current);
            })
            .catch((error) => console.log(error));
        };
        getDataFromWeatherAPI();

        // Callback functions for geolocation API
        const successCallback = (position: Position): void => {
            const lat: number = position.coords.latitude;
            const lng: number = position.coords.longitude;
            city = lat + "," + lng;
            getDataFromWeatherAPI();
        };

        const errorCallback = (): void => {
            // If geolocation fails, use default city
            city = "Tbilisi";
            getDataFromWeatherAPI();
        };

        // Get the user's location using geolocation API
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  return (
    <div className="weatherContainer">
      <img className="weather__icon" alt="weather icon"/>
      <p className="weather__degrees">16</p>
      <p className="weather__location">Tbilisi</p>
    </div>
  );
}
