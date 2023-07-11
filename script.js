
const API_KEY = '8279a2d79bee3a3007dcae7c5910f483';

const DefaultPlace = "Pune";
const CheckCity = /^[A-Za-z]+$/;

let WeatherContainer = document.querySelector(".weather-container")
let CurrentDate = document.getElementById("date");
let CurrentTime = document.getElementById("Time");
let City = document.getElementById("place");
let SearchCity = document.getElementById("search-city");
let SearchButton = document.getElementById('search-btn');
let Temperature = document.getElementById("temperature");
let Condition = document.getElementById("condition");
let Humidity = document.getElementById("humidity");
let WindSpeed = document.getElementById("windspeed");
let ErrorMsg = document.getElementById("ErrorMsg");

let day1= document.getElementById("day1")
let day1temp = document.getElementById("day1-temp");
let day1humidity = document.getElementById("day1-humidity");
let day1wind = document.getElementById("day1-wind");
let day1condition = document.getElementById("day1-condition");

let day2= document.getElementById("day2")
let day2temp = document.getElementById("day2-temp");
let day2humidity = document.getElementById("day2-humidity");
let day2wind = document.getElementById("day2-wind");
let day2condition = document.getElementById("day2-condition");

let day3= document.getElementById("day3")
let day3temp = document.getElementById("day3-temp");
let day3humidity = document.getElementById("day3-humidity");
let day3wind = document.getElementById("day3-wind");
let day3condition = document.getElementById("day3-condition");

let day4= document.getElementById("day4")
let day4temp = document.getElementById("day4-temp");
let day4humidity = document.getElementById("day4-humidity");
let day4wind = document.getElementById("day4-wind");
let day4condition = document.getElementById("day4-condition");

let day5= document.getElementById("day5")
let day5temp = document.getElementById("day5-temp");
let day5humidity = document.getElementById("day5-humidity");
let day5wind = document.getElementById("day5-wind");
let day5condition = document.getElementById("day5-condition");

let day6= document.getElementById("day6")
let day6temp = document.getElementById("day6-temp");
let day6humidity = document.getElementById("day6-humidity");
let day6wind = document.getElementById("day6-wind");
let day6condition = document.getElementById("day6-condition");

let day7= document.getElementById("day7")
let day7temp = document.getElementById("day7-temp");
let day7humidity = document.getElementById("day7-humidity");
let day7wind = document.getElementById("day7-wind");
let day7condition = document.getElementById("day7-condition");

let day8= document.getElementById("day8")
let day8temp = document.getElementById("day8-temp");
let day8humidity = document.getElementById("day8-humidity");
let day8wind = document.getElementById("day8-wind");
let day8condition = document.getElementById("day8-condition");

let conditionIconBox = document.getElementById("condition-icon");


SearchButton.addEventListener('click',(event) => {
    let len = SearchCity.value
    if(SearchCity.value.match(CheckCity) && len.length != 0){
        getWeather(SearchCity.value);
    }
})

const getWeather = (city) => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/forecast.json?key=378603cebc014f298d5164956232702&q=${city}&days=9&aqi=no&alerts=no`;

    fetch(url).then((resp) => resp.json())
    .then(data =>{ 
        return ShowWeather(data)
    })
    .catch(()=>{
        ErrorMsg.innerHTML = `${city} city not found`;
        SearchCity.focus();
        SearchCity.value = "";
        HideErrorMsg();
    })

}

const ShowWeather = (WeatherData) =>{
    // console.log(WeatherData);

    City.innerHTML = `${WeatherData.location.name}`; 
    Temperature.innerHTML =`${WeatherData.current.temp_c}`;
    Condition.innerHTML = `${WeatherData.current.condition.text}`;
    Humidity.innerHTML = `${WeatherData.current.humidity}`; 
    WindSpeed.innerHTML = `${WeatherData.current.wind_kph}`;
    conditionIconBox.innerHTML =`<img src="${WeatherData.current.condition.icon}" alt="condition-icon">`

    day1.innerHTML = `${WeatherData.forecast.forecastday[1].date}`;
    day1condition.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[1].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[1].day.condition.icon}" alt="Condition-Icon">`
    day1temp.innerHTML =  `${WeatherData.forecast.forecastday[1].day.avgtemp_c}`+"&deg;C" ;
    day1humidity.innerHTML =  `${WeatherData.forecast.forecastday[1].day.avghumidity}` + "&percnt;";
    day1wind.innerHTML =  `${WeatherData.forecast.forecastday[1].day.maxtemp_c}` + "Km/h";

    day2.innerHTML = `${WeatherData.forecast.forecastday[2].date}`;
    day2condition.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[2].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[2].day.condition.icon}" alt="Condition-Icon">`
    day2temp.innerHTML =  `${WeatherData.forecast.forecastday[2].day.avgtemp_c}`+"&deg;C" ;
    day2humidity.innerHTML =  `${WeatherData.forecast.forecastday[2].day.avghumidity}` + "&percnt;";
    day2wind.innerHTML =  `${WeatherData.forecast.forecastday[2].day.maxtemp_c}` + "Km/h";

    day3.innerHTML = `${WeatherData.forecast.forecastday[3].date}`;
    day3condition.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[3].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[3].day.condition.icon}" alt="Condition-Icon">`
    day3temp.innerHTML =  `${WeatherData.forecast.forecastday[3].day.avgtemp_c}`+"&deg;C" ;
    day3humidity.innerHTML =  `${WeatherData.forecast.forecastday[3].day.avghumidity}` + "&percnt;";
    day3wind.innerHTML =  `${WeatherData.forecast.forecastday[3].day.maxtemp_c}` + "Km/h";

    day4.innerHTML = `${WeatherData.forecast.forecastday[4].date}`;
    day4condition.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[4].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[4].day.condition.icon}" alt="Condition-Icon">`
    day4temp.innerHTML =  `${WeatherData.forecast.forecastday[4].day.avgtemp_c}`+"&deg;C" ;
    day4humidity.innerHTML =  `${WeatherData.forecast.forecastday[4].day.avghumidity}` + "&percnt;";
    day4wind.innerHTML =  `${WeatherData.forecast.forecastday[4].day.maxtemp_c}` + "Km/h";

    day5.innerHTML = `${WeatherData.forecast.forecastday[5].date}`;
    day5condition.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[5].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[5].day.condition.icon}" alt="Condition-Icon">`
    day5temp.innerHTML =  `${WeatherData.forecast.forecastday[5].day.avgtemp_c}`+"&deg;C" ;
    day5humidity.innerHTML =  `${WeatherData.forecast.forecastday[5].day.avghumidity}` + "&percnt;";
    day5wind.innerHTML =  `${WeatherData.forecast.forecastday[5].day.maxtemp_c}` + "Km/h";

    day6.innerHTML = `${WeatherData.forecast.forecastday[6].date}`;
    day6condition.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[6].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[6].day.condition.icon}" alt="Condition-Icon">`
    day6temp.innerHTML =  `${WeatherData.forecast.forecastday[6].day.avgtemp_c}`+"&deg;C" ;
    day6humidity.innerHTML =  `${WeatherData.forecast.forecastday[6].day.avghumidity}` + "&percnt;";
    day6wind.innerHTML =  `${WeatherData.forecast.forecastday[6].day.maxtemp_c}` + "Km/h";

    day7.innerHTML = `${WeatherData.forecast.forecastday[7].date}`;
    day7condition.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[7].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[7].day.condition.icon}" alt="Condition-Icon">`
    day7temp.innerHTML =  `${WeatherData.forecast.forecastday[7].day.avgtemp_c}`+"&deg;C" ;
    day7humidity.innerHTML =  `${WeatherData.forecast.forecastday[7].day.avghumidity}` + "&percnt;";
    day7wind.innerHTML =  `${WeatherData.forecast.forecastday[7].day.maxtemp_c}` + "Km/h";

    day8.innerHTML = `${WeatherData.forecast.forecastday[8].date}`;
    day8condition.innerHTML = `<p>Condition<span>${WeatherData.forecast.forecastday[8].day.condition.text}</span> </p>
    <img src="${WeatherData.forecast.forecastday[8].day.condition.icon}" alt="Condition-Icon">`
    day8temp.innerHTML =  `${WeatherData.forecast.forecastday[8].day.avgtemp_c}`+"&deg;C" ;
    day8humidity.innerHTML =  `${WeatherData.forecast.forecastday[8].day.avghumidity}` + "&percnt;";
    day8wind.innerHTML =  `${WeatherData.forecast.forecastday[8].day.maxtemp_c}` + "Km/h";


}

let SystemDate = new Date();
CurrentDate.innerHTML = SystemDate.getDate()+"/"+(SystemDate.getMonth()+1)+"/"+SystemDate.getFullYear();
function startTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    CurrentTime.innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
      i = "0" + i
  }; 
    return i;
}

function HideErrorMsg(){
    setTimeout(() => {
        ErrorMsg.style.opacity = 0;
    }, 5000);
}


