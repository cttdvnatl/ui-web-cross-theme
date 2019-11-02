import React from 'react'
import Preloader from '../components/Preloader.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AboutUs from '../components/AboutUs.jsx'

function About() {
  return (
    <div>
      <Preloader/>
      <Header/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default About
