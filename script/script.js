window.addEventListener('load', ()=> {
    let lat;
    let lng;
    let currentLocation = document.querySelector(".currentLocation")
    let value1 = document.querySelector(".value1")
    let value2 = document.querySelector(".value2")
    let value3 = document.querySelector(".value3")
    let value4 = document.querySelector(".value4")

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat  = position.coords.latitude;
            lng  = position.coords.longitude;
            
            //Used "heroku" to bypass the DarkSky Weather api CORS
            const heroku = 'https://cors-anywhere.herokuapp.com/';
            const key = `${heroku}https://api.darksky.net/forecast/5d9e41a0749e684a9fc7edf31da2e543/${lat},${lng}`;

            fetch(key)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const {windSpeed, temperature, summary, humidity, icon} = data.currently;
                currentLocation.textContent = data.timezone;
                value1.textContent = windSpeed;
                value2.textContent = temperature;
                value3.textContent = summary;
                value4.textContent = humidity;
                setIcons(icon, document.querySelector('.icon'))
            })
            //console.log(key)
        });
    }
    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "lightblue"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});