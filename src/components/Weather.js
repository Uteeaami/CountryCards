import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({name}) => {
    const [countryWeather, setCountryWeather] = useState("")

    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
          .then(response => {
            const apiResponse = response.data
            console.log(apiResponse)
            console.log(`Current temperature in ${apiResponse.name} is ${apiResponse.main.temp}℃`);
            setCountryWeather(response.data)
          }).catch(error => {
            console.log(error)
          }).catch(console.log("Not found"))    
      }, [])
      

    return(
        <div>
        {countryWeather && (
          <div>
            <h1 id='weatherHeader'>Weather in {name}</h1>
            <article id='weatherArticle'>
                <ul>
                    <li>Temperature: {countryWeather.main.temp} ℃</li>
                    <li>Wind: {countryWeather.wind.speed} m/s</li>
                    <img src={`http://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@2x.png`} alt="Weather icon"></img>
                </ul>
      
            </article>
            </div>
        )}
        </div>
    )
}

export default Weather