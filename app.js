
  function getWeather(){
let cityName=document.getElementById("cityName").value;
  axios.get(`https://api.weatherapi.com/v1/current.json?key=c005f17cb7e040d78b3202241221909&q=${cityName}&aqi=no`)
  .then(function (response) {
    // handle success
    let weatherData=response.data;
    console.log(weatherData);
    console.log("temp(c):",weatherData.current.temp_c);
    console.log("Region:",weatherData.location.region);
document.querySelector(".tempC").innerHTML=` ${weatherData.current.temp_c}<sup>o<sub>C</sub></sup>`;

document.querySelector(".tempF").innerHTML=` ${weatherData.current.temp_f}<sup>o<sub>F</sub></sup>`;
document.querySelector(".city").innerHTML=` ${weatherData.location.name}`;
document.querySelector(".date").innerHTML=` ${weatherData.location.localtime}`;
document.querySelector(".condition").innerHTML=`${weatherData.current.condition.text}`;
document.querySelector(".humidity").innerHTML=`${weatherData.current.humidity} &nbsp%`;
document.querySelector(".precipitation").innerHTML=`${weatherData.current.precip_mm}`;
document.querySelector(".uv").innerHTML=`${weatherData.current.uv}`;
document.querySelector(".visibility").innerHTML=`${weatherData.current.vis_km}`;
document.querySelector(".windSpeed").innerHTML=`${weatherData.current.wind_kph}`;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  }
