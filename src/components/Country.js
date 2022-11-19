import React, { useState, useEffect } from 'react'
import {
    Link, useParams
  } from "react-router-dom"
  import axios from 'axios'

const Country = () =>{
    const [country, setCountry] = useState([])
    const {name} = useParams()

    useEffect(() => {
        axios
          .get(`https://restcountries.com/v3.1/name/${name}`)
          .then(response => {
            console.log('promise fulfilled')
            setCountry(response.data)
            console.log(country)
          })
      }, [])

    return(
        <div>
            <Link to="/">Back to main page</Link>
            <h1>{name}</h1>
        </div>
    )
}

export default Country