/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Preloader from 'components/Preloader/Preloader';

const banNganh = (prop) => {
    return (
        <div>
            <Preloader/>
            {/*<!-- ##### Contact Area Start ##### --> */}
            <section className="about-area section-padding-100-0">
                <div className="container">
                    <div className="row">
                        {/* <!-- Section Heading --> */}
                        <div className="col-12">
                            <div className="section-heading">
                                <h2>{prop.data.header.title}</h2>
                                <p>{prop.data.header.sumary}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row about-content justify-content-center">
                        {/* <!-- Single About Us Content --> */}
                        {prop.data.content.map((content, index) => {
                            return(
                                <div className="col-12 col-md-6 col-lg-4" key={index}>
                                    <div className="about-us-content mb-100">
                                        <img src={content.src} alt=""/>
                                        <div className="about-text">
                                            <h4>{content.title}</h4>
                                            <p>{content.sumary}</p>
                                            <a href="#">Read More <i className="fa fa-angle-double-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* <!-- ##### About Area End ##### --> */}
        </div>
    );
};

export default banNganh;