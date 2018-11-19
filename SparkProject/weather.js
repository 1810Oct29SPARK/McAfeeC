
 let dallasWeather = {};

 //send a GET request to this endppint to get Tampa weather
 let weatherApiURL = 'http://api.openweathermap.org/data/2.5/weather?q=Dallas,us&units=imperial&APPID=e252686c01d12e565501d3624c1c1b2d';

 function getDallasWeather() {
     fetch(weatherApiURL).then((response) => {return response.json();
    }).then((data) => {
        dallasWeather = data;
        console.log('The Temperature is: '+data.main.temp+' degrees');
        updateWeather();
        updateWeather2();
        updateWeather3();
    });
 }
    function updateWeather() {
        let newPara = document.createElement("p")
        newPara.innerText = 'Current Temperature: '+dallasWeather.main.temp+'°';
        //add new p element as a child of weatherDiv
        document.getElementById("weatherDiv").appendChild(newPara);
}
    function updateWeather2() {
        let newPara = document.createElement("p")
        newPara.innerText = 'Current Humidty: '+dallasWeather.main.humidity+'%';
        //add new p element as a child of humidityDiv
        document.getElementById("humidityDiv").appendChild(newPara);
}
    function updateWeather3() {
        let newPara = document.createElement("p")
        newPara.innerText = 'Wind Speed: '+dallasWeather.wind.speed+' MPH';
        //add new p element as a child of humidityDiv
        document.getElementById("currentDiv").appendChild(newPara);
}
window.onload=function(){
    getDallasWeather();
}