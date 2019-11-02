/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Preloader from 'components/Preloader/Preloader';

const sermon = (prop) => {
    return (
        <div>
            <Preloader/>
            <section className="latest-sermons-area section-padding-100-0">
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

                    <div className="row justify-content-center">
                        {/* <!-- Single Latest Sermons --> */}
                        {prop.data.content.map((content, index) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4" key={index}>
                                    <div className="single-latest-sermons mb-100">
                                        <div className="sermons-thumbnail">
                                            <img src={content.src} alt=""/>
                                            {/* <!-- Date --> */}
                                            <div className="sermons-date">
                                                <h6><span>{content.date.day}</span>{content.date.month}</h6>
                                            </div>
                                        </div>
                                        <div className="sermons-content">
                                            <div className="sermons-cata">
                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Video"><i className="fa fa-video-camera" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Audio"><i className="fa fa-headphones" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Docs"><i className="fa fa-file" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Download"><i className="fa fa-cloud-download" aria-hidden="true"></i></a>
                                            </div>
                                            <h4>{content.title}</h4>
                                            <div className="sermons-meta-data">
                                                <p><i className="fa fa-user" aria-hidden="true"></i> Bài Viết: <span>{content.author}</span></p>
                                                <p><i className="fa fa-tag" aria-hidden="true"></i> Categories: <span>{content.category}</span></p>
                                                <p><i className="fa fa-clock-o" aria-hidden="true"></i> Feb 3 on <span>{content.time}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default sermon;