import React from 'react';
import Preloader from 'components/Preloader/Preloader';
import Slider from 'components/Slider/Slider';
import About from 'components/About/About';
import UpcomingEvent from 'components/UpcomingEvent';
import CallToAction from 'components/CallToAction';
import Sermon from 'components/Sermon/Sermon';
import Gallery from 'components/Gallery';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';


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
