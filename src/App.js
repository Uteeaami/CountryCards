import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"

import Content from './components/Content'
import Country from './components/Country'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setAllCountries(response.data)
      })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Content countries={allCountries}/>}/>
        <Route path='/:name' element={<Country></Country>}/>
      </Routes>
    </Router>
  )
}

export default App