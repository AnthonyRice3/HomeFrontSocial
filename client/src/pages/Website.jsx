import React from 'react'

import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Cities from '../components/Cities/Cities';

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        
        <Hero />
      </div>
      <Companies />
      <Cities />
      <Value/>
      <Residencies/>
      <Contact/>
      <GetStarted/>
      
    </div>
  )
}

export default Website


