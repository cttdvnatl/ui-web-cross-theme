import React from 'react';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import Preloader from 'components/Preloader/Preloader';
import Slider from 'components/Slider/Slider';
import About from 'pages/About/About';
import UpcomingEvent from 'components/UpcomingEvent';
import CallToAction from 'components/CallToAction';
import Sermon from 'components/Sermon/Sermon';
import Gallery from 'components/Gallery';
const homepage = (prop) => {
    return (
        <div>
            <Breadcrumb/>
            <Preloader/>
            <Slider/>
            <About data={prop.data.about}/>
            <UpcomingEvent/>
            <CallToAction/>
            <Sermon data={prop.data.sermon}/>
            <Gallery/>
        </div>
    );
};

export default homepage;