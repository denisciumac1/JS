const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Chisinau&units=metric';
const KEY = '&appid=700f8a2e5b4e24228db1a0713192e327';
const IMG ='http://openweathermap.org/img/w/';
function getWeather(){
  var xhr = new XMLHttpRequest();
      xhr.open("GET",  URL + KEY )
      xhr.onload = function(){
          let data = JSON.parse(xhr.responseText);
          console.log(data);
      var img = document.createElement('img');
          img.src = IMG + data.weather[0].icon + ".png";
      var h3 =  document.createElement('h3');
          h3.innerHTML="Temperature Chisinau: " + data.main.temp +"&#8451;";
      var div = document.querySelector('.weather-widget');
      div.appendChild(img);
      div.appendChild(h3);
        }
   xhr.send();
}
// pornind de la aceasta functie
// si utilizand https://openweathermap.org/ -> API
// faceti ca in div-ul cu clasa "weather-widget"
// sa apara temperatura in celsius
// si iconita corespunzatoare vremi
// pentru localitatea setata in constanta LOCALITY


// NOTA: acest API necesita inregistrare si cheie de access!
