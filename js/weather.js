const API_KEY = "f65174e56b367ed1a45c832bc9c5063b"; 

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        const temp = Math.round(data.main.temp);
        weather.innerText = `${data.weather[0].main} / ${temp}°C`
    });
}
function onGeoError() {
    alert("Location not found.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
 




