/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import PreLoader from 'components/Preloader/Preloader';
const thuVien = (prop) => {
    return (
        <div>
            <PreLoader/>
            {/* <!-- ##### Contact Area Start ##### --> */}
            <section class="about-area section-padding-100-0">
                <div class="container">
                    <div class="row">
                        {/* <!-- Section Heading --> */}
                        <div class="col-12">
                            <div class="section-heading">
                                <h2>{prop.data.header.title}</h2>
                                <p>{prop.data.header.sumary}</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="row about-content justify-content-center">
                        {/* <!-- Single About Us Content --> */}
                        {prop.data.content.map(content => {
                            return(
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="about-us-content mb-100">
                                        <img src={content.src} alt=""/>
                                        <div class="about-text">
                                            <h4>{content.title}</h4>
                                            <p>{content.title}</p>
                                            <a href="#">Read More <i class="fa fa-angle-double-right"></i></a>
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

export default thuVien;