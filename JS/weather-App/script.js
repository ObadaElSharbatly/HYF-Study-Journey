const cityNameEL = document.querySelector('#city');
const iconEL = document.querySelector('#icon');
const weatherConditionEL = document.querySelector('#weather-condition');
const weatherTemperatureEL  = document.querySelector('#temp');
const weatherTemperatureTypeEL  = document.querySelector('#temp-type');

const apiKey = 'b458fd088f5b42c082691547210409';
const city = 'new york'
async function fetchData (){
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
        if (response.ok) {
            const jsonResponse = response.json();
            return jsonResponse;
        }
        throw new Error('cannot fetch data');
    } catch(error){
        console.log(error.message)
    }
};

function workWithJsonData(){
    fetchData().then((jsonData)=>{
        console.log(jsonData);
        // show the region of result
        const {name, region, country} = jsonData.location;
        cityNameEL.textContent = `${name} - ${region} - ${country}`

        // show the icon and weather condition
        const {icon:iconLink, text: weatherCondition} = jsonData.current.condition;
        iconEL.src = iconLink;
        weatherConditionEL.textContent = weatherCondition;

        // show the temperature
        const {feelslike_f, feelslike_c} = jsonData.current;
        console.log(feelslike_f);
        console.log(feelslike_c);

        if (weatherTemperatureTypeEL.textContent === 'F'){
            weatherTemperatureEL.textContent = feelslike_f;
        } else {
            weatherTemperatureEL.textContent = feelslike_c;
        }

        function changeTemperature () {
            if (weatherTemperatureTypeEL.textContent === 'F') {
                weatherTemperatureEL.textContent = feelslike_c;
                weatherTemperatureTypeEL.textContent = 'C'
            } else {
                weatherTemperatureEL.textContent = feelslike_f;
                weatherTemperatureTypeEL.textContent = 'F'
            }
        }
        weatherTemperatureEL.addEventListener('click', changeTemperature);

        

    })
    .catch((error)=>{
        console.log(error.message, 'what the Heck')
    })
}

window.addEventListener('load', workWithJsonData)


