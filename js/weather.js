//https://api.openweathermap.org/data/2.5/weather?q=giza&appid=14ea0115b7324b504c9912e53a5b367d;
//Set The Date To Get The day Of The Week To Each City
let date = new Date();
//Set Array off Week Days Which In Javascript Start From Sunday
let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//Set The Kelvin Value
let kelvin = 274;

window.onload = ()=>{
    fetchFirstCity();
    fetchSecCity();
    fetchThirdCity()
}

//Get First City Elements
let first_city_day = document.querySelector('.first-city .day'),
    first_city = document.querySelector('.first-city .city'), 
    first_city_temp = document.querySelector('.first-city .temp-cont .temp-parent #temp'),
    first_city_weather_png = document.querySelector('.first-city .temp-cont img'),
    first_city_high_temp = document.querySelector('.first-city .high-low-container #high-temp'),
    first_city_low_temp = document.querySelector('.first-city .high-low-container #low-temp');
//Set The Weather Function For First City
function fetchFirstCity(){
    let first_req = new XMLHttpRequest();
    first_req.onreadystatechange = function(){
        if(first_req.readyState == 4){
            let weather = JSON.parse(first_req.responseText);
            first_city_day.innerHTML = weekDays[date.getDay()];
            console.log(weather);
            first_city.innerHTML = weather.name;
            first_city_temp.innerHTML = `${Math.floor(weather.main.temp - kelvin)}` + `&deg;` + `C`;
            first_city_weather_png.src = `http://openweathermap.org/img/wn/` + weather.weather[0].icon + `.png`;
            first_city_weather_png.setAttribute('title',weather.weather[0].description);
            first_city_high_temp.innerHTML = `High: ${Math.floor(weather.main.temp_max - kelvin)}&deg;C`;
            first_city_low_temp.innerHTML = `Low: ${Math.floor(weather.main.temp_min - kelvin)}&deg;C`;
        }
    }
    first_req.open('GET','https://api.openweathermap.org/data/2.5/weather?q=london&appid=14ea0115b7324b504c9912e53a5b367d',true);
    first_req.send();
}
//End Of The First City Weather


//Get Sec City Elements
let Sec_city_day = document.querySelector('.Sec-city .day'),
    Sec_city = document.querySelector('.Sec-city .city'), 
    Sec_city_temp = document.querySelector('.Sec-city .temp-cont .temp-parent #temp'),
    Sec_city_weather_png = document.querySelector('.Sec-city .temp-cont img'),
    Sec_city_high_temp = document.querySelector('.Sec-city .high-low-container #high-temp'),
    Sec_city_low_temp = document.querySelector('.Sec-city .high-low-container #low-temp');
    console.log(Sec_city_day);
//Set The Weather Function For Sec City
function fetchSecCity(){
    let Sec_req = new XMLHttpRequest();
    Sec_req.onreadystatechange = function(){
        if(Sec_req.readyState == 4){
            let weather = JSON.parse(Sec_req.responseText);
            Sec_city_day.innerHTML = weekDays[date.getDay()];
            console.log(weather);
            Sec_city.innerHTML = weather.name;
            Sec_city_temp.innerHTML = `${Math.floor(weather.main.temp - kelvin)}` + `&deg;` + `C`;
            Sec_city_weather_png.src = `http://openweathermap.org/img/wn/` + weather.weather[0].icon + `.png`;
            Sec_city_weather_png.setAttribute('title',weather.weather[0].description);
            Sec_city_high_temp.innerHTML = `High: ${Math.floor(weather.main.temp_max - kelvin)}&deg;C`;
            Sec_city_low_temp.innerHTML = `Low: ${Math.floor(weather.main.temp_min - kelvin)}&deg;C`;
        }
    }
    Sec_req.open('GET','https://api.openweathermap.org/data/2.5/weather?q=gaza&appid=14ea0115b7324b504c9912e53a5b367d',true);
    Sec_req.send();
}
//End Of The Sec City Weather


//Get Third City Elements
let third_city_day = document.querySelector('.third-city .day'),
    third_city = document.querySelector('.third-city .city'), 
    third_city_temp = document.querySelector('.third-city .temp-cont .temp-parent #temp'),
    third_city_weather_png = document.querySelector('.third-city .temp-cont img'),
    third_city_high_temp = document.querySelector('.third-city .high-low-container #high-temp'),
    third_city_low_temp = document.querySelector('.third-city .high-low-container #low-temp');
//Set The Weather Function For Third City
function fetchThirdCity(){
    let third_req = new XMLHttpRequest();
    third_req.onreadystatechange = function(){
        if(third_req.readyState == 4){
            let weather = JSON.parse(third_req.responseText);
            third_city_day.innerHTML = weekDays[date.getDay()];
            console.log(weather);
            third_city.innerHTML = weather.name;
            third_city_temp.innerHTML = `${Math.floor(weather.main.temp - kelvin)}` + `&deg;` + `C`;
            third_city_weather_png.src = `http://openweathermap.org/img/wn/` + weather.weather[0].icon + `.png`;
            third_city_weather_png.setAttribute('title',weather.weather[0].description);
            third_city_high_temp.innerHTML = `High: ${Math.floor(weather.main.temp_max - kelvin)}&deg;C`;
            third_city_low_temp.innerHTML = `Low: ${Math.floor(weather.main.temp_min - kelvin)}&deg;C`;
        }
    }
    third_req.open('GET','https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=14ea0115b7324b504c9912e53a5b367d',true);
    third_req.send();
}
//End Of The Third City Weather

//Start Search Weather
let searchField = document.querySelector('.search-container input[type="search"]'),
    searchButton = document.querySelector('.search-container input[type="submit"]');
    

let search_city_day = document.querySelector('.city-temperature .day'),
    search_city = document.querySelector('.city-temperature .city'), 
    search_city_temp = document.querySelector('.city-temperature .temp-cont .temp-parent #temp'),
    search_city_weather_png = document.querySelector('.city-temperature .temp-cont img'),
    search_city_high_temp = document.querySelector('.city-temperature .high-low-container #high-temp'),
    search_city_low_temp = document.querySelector('.city-temperature .high-low-container #low-temp'),
    searchContainer = document.querySelector('.city-temperature');


searchButton.addEventListener('click',fetchSearch);

function fetchSearch(){
    
    let req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState == 4){
            let searchResult = JSON.parse(req.responseText);
            if(searchResult.name == undefined){
                searchContainer.classList.add('hide-box');
                return false;
            }else{
                searchContainer.classList.remove('hide-box');
                search_city_day.innerHTML = weekDays[date.getDay()];
                search_city.innerHTML = searchResult.name;
                search_city_temp.innerHTML = `${Math.floor(searchResult.main.temp - kelvin)}` + `&deg;` + `C`;
                search_city_weather_png.src = `http://openweathermap.org/img/wn/` + searchResult.weather[0].icon + `.png`;
                search_city_weather_png.setAttribute('title',searchResult.weather[0].description);
                search_city_high_temp.innerHTML = `High: ${Math.floor(searchResult.main.temp_max - kelvin)}&deg;C`;
                search_city_low_temp.innerHTML = `Low: ${Math.floor(searchResult.main.temp_min - kelvin)}&deg;C`;
            }
            
        }
    }
    req.open('GET','https://api.openweathermap.org/data/2.5/weather?q=' + searchField.value + '&appid=14ea0115b7324b504c9912e53a5b367d',true);
    req.send();
    searchField.value = '';
}