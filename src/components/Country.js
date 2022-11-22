import React, { useState, useEffect } from 'react'
import {
    Link, useParams
  } from "react-router-dom"
  import axios from 'axios'
import globe from '../assets/globe.png'
import Weather from './Weather'


const Country = () =>{
    const [country, setCountry] = useState([])
    const [countryWeather, setCountryWeather] = useState([])
    const {name} = useParams()
  
    useEffect(() => {
        axios
          .get(`https://restcountries.com/v3.1/name/${name}`)
          .then(response => {
            console.log('promise fulfilled')
            console.log(response.data)
            setCountry(response.data)
          })
      }, [])


      

    return(
        <section>
              {country.map(info => 
                <article key={info.name.common} id='countryArticle'>
                <Link id='back' to={'/'}>Back to main page</Link>
                <a title='Link to OpenStreetMap' id='linktomap' href={Object.values(info.maps)[1]} target="_blank">
                <img src={globe} style={{width:'35px', height:'35px'}}></img>
                </a>
                  <h2>{info.name.common}</h2>
                  <ul className='infoUl'>
                    <li>{info.capital ? info.capital : 'No capital'}</li>
                    <li>{`${info.region}`}</li>
                  </ul>
                  <img id='flag' src={Object.values(info.flags)[0]}></img>
                  <ul className='statsUl'>
                    <li>{`Area: ${info.area} km`}<sup>2</sup></li>
                    <li>{`Population: ${info.population}`}</li>
                  </ul>
                  <ul>
                  <h3>Spoken languages: </h3>
                    {Object.values(info.languages).map((languages,i) => 
                      <li key={i} className='countryLanguage'>{languages}</li>
                      )}
                  </ul>
                  <Weather name={info.capital}></Weather>
                </article>
                )}
        </section>
    )
}

export default Country