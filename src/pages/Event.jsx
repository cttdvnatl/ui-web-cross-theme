import React from 'react'
import Preloader from '../components/Preloader.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Events from '../components/Events.jsx'


function Event() {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default Event
