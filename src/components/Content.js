import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import Footer from './Footer'
import {
     Link
  } from "react-router-dom"



const Content = ({countries}) =>{
    const [regionCountries, setRegionCountries] = useState('')
    const [typeFilter, setTypeFilter] = useState('')

    const handleFilterChange = (event) => {
        setRegionCountries(event.target.value)
        setTypeFilter(event.target.value)
      }


        return(
            <div>
            <Filter handleFilterChange={handleFilterChange}></Filter>
            <section className="section">
            {countries.filter(country => country.region.toUpperCase().includes(regionCountries.toUpperCase()) ? 
                country.region.toUpperCase().includes(regionCountries.toUpperCase()) : 
                country.name.common.toUpperCase().includes(typeFilter.toUpperCase()))
                .map(country => 
                    <Link id="Link" to={`/${country.name.common}`} key={country.name.common}>
                    <article id="contentArticle">
                        <h2>{country.name.common}</h2>
                        <ul>
                            <li>{`Capital: ${country.capital ? country.capital : 'No capital'}`}</li>
                            <li>{`Region: ${country.region}`}</li>
                        </ul>
                        <img src={Object.values(country.flags)[0]}></img>
                    </article>
                    </Link>
                )}
            </section>
            <Footer></Footer>
            </div>
        )
    }

export default Content