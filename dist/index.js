const form = document.getElementById('form')
form.addEventListener('submit',getTemperatureforplace)
function getTemperatureforplace(event){
    event.preventDefault()
    const latitudeInput = document.getElementById('latitude')
    const latitudeEntry = latitudeInput.value
    const longitudeInput = document.getElementById('longitude')
    const longitudeEntry = longitudeInput.value
    const url = 'https://api.open-meteo.com/v1/forecast?latitude='+latitudeEntry+'&longitude='+longitudeEntry+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
    fetch(url)
    .then(response => response.json())
    .then(showTemperature)
    .catch(showError)

}



function showTemperature(data){
    const temperature=(data.current_weather.temperature)
    const temp = document.getElementById('temp')
    temp.innerHTML = temperature
}
function showError(error){
    console.log("some error occured")
}