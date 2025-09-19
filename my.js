document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value;
    
    function updateTemp(data){
        const location_name = document.getElementById('location_name');
        location_name.innerHTML = `Location Name : ${data.location.name}`;

        const country_name = document.getElementById('country_name');
        country_name.innerHTML = `Location Country name : ${data.location.country}`;

        const temperature = document.getElementById('temperature');
        temperature.innerHTML = `Today's Temperature : ${data.current.temp_c}`;

        const wind_kph = document.getElementById('wind_kph');
        wind_kph.innerHTML = `Today's Wind Speed(kph) : ${data.current.wind_kph}`;

        const pressure_mb = document.getElementById('pressure_mb');
        pressure_mb.innerHTML = `Today's Current Pressure(mb) : ${data.current.pressure_mb}`;

        const humidity = document.getElementById('humidity');
        humidity.innerHTML = `Today's Humidity : ${data.current.humidity}`;

    }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${place}&aqi=yes`)
    


    prom
    .then(response=>response.json())
    .then(data=> updateTemp(data));


 
})