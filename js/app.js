// we should not include API Key in JS file 

const API_Key = '2706b30371adea907992dd66b49fefb1';

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = (data) => {
    //const temperature = document.getElementById('temperature');
    console.log(data);
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    //temperature.innerText = data.main.temp;
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    
    document.getElementById('city').innerText = city;

    loadTemperature(city);
})
loadTemperature('dhaka');