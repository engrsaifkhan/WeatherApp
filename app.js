function weather(){
 let temp= +document.querySelector("#temp").value;
 if(temp<0){
 document.querySelector("#result").innerHTML="Very cold, don't go outside";
document.querySelector(".weatherbody").style.backgroundImage="url('./images/extremeCold.jpg')";
}
else if(temp>0 && temp<10){
  document.querySelector("#result").innerHTML="Cold breeze outside, wear warm clothes";
  document.querySelector(".weatherbody").style.backgroundImage="url('./images/snow.jpg')";
}
else if(temp>10 && temp<25){
  document.querySelector("#result").innerHTML="Cool & pleasant weather";
  document.querySelector(".weatherbody").style.backgroundImage="url('./images/rainy.jpg')";
}
else if(temp>25 && temp<30){
  document.querySelector("#result").innerHTML="Go outside and enjoy!";
  document.querySelector(".weatherbody").style.backgroundImage="url('./images/spring.jpg')";
}
else if (temp>30 && temp<40) {
document.querySelector("#result").innerHTML="warm weather, be hydrated!";
document.querySelector(".weatherbody").style.backgroundImage="url('./images/sunny.jpg')";
}
else if (temp>40) {
  document.querySelector("#result").innerHTML="Very hot , don't go outside";
  document.querySelector(".weatherbody").style.backgroundImage="url('./images/hotWeather.jpg')";
}
}
