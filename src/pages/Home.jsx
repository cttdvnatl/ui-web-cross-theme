import React from 'react'
import Preloader from '../components/Preloader.jsx'
import Slider from '../components/Slider.jsx'
import About from '../components/AboutUs.jsx'
import UpcomingEvent from '../components/UpcomingEvent.jsx'
import CallToAction from '../components/CallToAction.jsx'
import Sermon from '../components/Sermon.jsx'
import Gallery from '../components/Gallery.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'


function Home() {
  return (
    <div>
      <Breadcrumb/>
      <Preloader/>
      <Slider/>
      <About/>
      <UpcomingEvent/>
      <CallToAction/>
      <Sermon/>
      <Gallery/>
    </div>
  );
}

export default Home
