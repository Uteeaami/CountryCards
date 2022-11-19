import React, { useState, useEffect } from 'react'
import Header from './Header'
import Filter from './Filter'
import {
     Link
  } from "react-router-dom"



const Content = ({countries}) =>{
    const [regionCountries, setRegionCountries] = useState('')

    const handleFilterChange = (event) => {
        setRegionCountries(event.target.value)
      }


        return(
            <div>
            <Header></Header>
            <Filter handleFilterChange={handleFilterChange}></Filter>
            <section className="section">
            {countries.filter(country => country.region.toUpperCase().includes(regionCountries.toUpperCase()))
                .map(country => 
                    <Link className="Link" to={`/${country.name.common}`} key={country.name.common}>
                    <article className="article">
                        <h2>{country.name.common}</h2>
                        <ul>
                            <li>{`Capital: ${country.capital}`}</li>
                            <li>{`Region: ${country.region}`}</li>
                        </ul>
                        <img src={Object.values(country.flags)[0]}></img>
                    </article>
                    </Link>
                )}
            </section>

            </div>
        )
    }

export default Content