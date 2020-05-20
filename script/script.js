let appId = "a432cb2f329751921e3a076a4c5d6abc"
let units = "imperial"
let searchMethod;

// If the search is equal to 5 and is a number, the seatch method is a zip code (USA only)
// Otherwise it's a city search 
function getSearchMethod(searchTerm) {
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip';
    else
        searchMethod = 'q';
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {

    let tempElement = document.getElementById('temperature');
    let minTempElement = document.getElementById('min-temp');
    let maxTempElement = document.getElementById('max-temp');
    let pressureElement = document.getElementById('pressure');
    let humidityElement = document.getElementById('humidity');
    let cityNameElement = document.getElementById('cityName');
    let weatherIcon = document.getElementById('iconImage');
    let weatherDescription = document.getElementById('weatherDescription');

    cityNameElement.innerHTML = resultFromServer.name;

    // The value changes depending on the city's current weather status. Each icons has different codes for the image.
    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

    let resultDescription = resultFromServer.weather[0].description;
    weatherDescription.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

    // Values are all in imperical measurements. 
    tempElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176F';
    minTempElement.innerHTML = Math.floor(resultFromServer.main.temp_min) + '&#176F';
    maxTempElement.innerHTML = Math.floor(resultFromServer.main.temp_max) + '&#176F';
    pressureElement.innerHTML = resultFromServer.main.pressure + ' PA';
    humidityElement.innerHTML = resultFromServer.main.humidity + '%';
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
        searchWeather(searchTerm);
});