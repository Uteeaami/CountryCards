import React, { useState, useEffect } from 'react'
import {
    Link, useParams
  } from "react-router-dom"
  import axios from 'axios'
import globe from '../assets/globe.png'

const Country = () =>{
    const [country, setCountry] = useState([])
    const {name} = useParams()

    useEffect(() => {
        axios
          .get(`https://restcountries.com/v3.1/name/${name}`)
          .then(response => {
            console.log('promise fulfilled')
            setCountry(response.data)
          })
      }, [])
    
    console.log(country)

    return(
        <section>
              {country.map(info => 
                <article key={info.name.common} className='countryArticle'>
                <Link className='back' to={'/'}>Back to main page</Link>
                <a className='linktomap' href={Object.values(info.maps)[1]} target="_blank">
                <img className='linkglobe' src={globe} style={{width:'30px', height:'30px'}}></img>
                </a>
                  <h2>{info.name.common}</h2>
                  <ul className='infoUl'>
                    <li className='countryCapital'>{info.capital ? info.capital : 'No capital'}</li>
                    <li className='countryRegion'>{`${info.region}`}</li>
                  </ul>
                  <img src={Object.values(info.flags)[0]}></img>
                  <ul className='statsUl'>
                    <li>{`Area: ${info.area}km`}<sup>2</sup></li>
                    <li>{`Population: ${info.population}`}</li>
                  </ul>
                  <ul className='languageUl'>
                  <h3>Spoken languages: </h3>
                    {Object.values(info.languages).map(languages => 
                      <li className='countryLanguage'>{languages}</li>
                      )}
                  </ul>
                </article>
                )}
        </section>
    )
}

export default Country