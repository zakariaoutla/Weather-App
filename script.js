const API_KE = "254490f6897712e51e50b4df88867c6e";

function getData() {
    const city = document.getElementById("inputCity").value.trim();
    if (city === "") {
        return document.getElementById("alert").textContent = "Enter valid city";
    }
    document.getElementById("alert").textContent = "";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KE}`;
    
    fetch(url)
        .then(res => res.json())
        .then(data => {

            const cityName = data.name;
            const temp = Math.round(data.main.temp);
            const icon = data.weather[0].icon;
            const desc = data.weather[0].description;

            const container = document.getElementById("infoWether");
            container.innerHTML = `
                <h3>MY LOCATION</h3>
                <h1>${cityName}</h1>
                <p class="temperature">${temp}°C</p>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
                <div class="cloudy">
                    <p>${desc}</p>
                </div>
            `;

        })
        .catch(() => {
            document.getElementById("alert").textContent = "City not found!";
        });
}
  

document.getElementById("btnClick").addEventListener("click", getData);
