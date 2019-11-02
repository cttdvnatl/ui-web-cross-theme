/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const footer = () => {
    return (
        // <!-- ##### Footer Area Start ##### -->
        <footer className="footer-area">
        {/* <!-- Main Footer Area --> */}
        <div className="main-footer-area">
            <div className="container">
                <div className="row">
                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-70">
                            <a href="/" className="footer-logo"><img src="img/core-img/gxlogo.png" alt=""/></a>
                            <p></p>
                        </div>
                    </div>

                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-70">
                            <h5 className="widget-title">Quick Link</h5>
                            <nav className="footer-menu">
                                <ul>
                                    <li><a href="/">Trang Nhà</a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Thông Báo</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Giới Thiệu</a></li>
                                    <li></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Hình Ảnh</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Bài Viết</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Liên Hệ</a></li>
                                    {/* <!--li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Blogs</a></li--> */}
                                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i>Dâng Hiến Online</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-70">
                            <h5 className="widget-title">Thông Báo</h5>
                            <div className="single-latest-news">
                                <a href="#">Lớp Giáo Lý Dự Tòng 2019</a>
                                <p><i className="fa fa-calendar" aria-hidden="true"></i> February 11, 2017</p>
                            </div>
                            <div className="single-latest-news">
                                <a href="#">Lớp Giáo Lý Chuẩn bị Hôn Nhân 2019</a>
                                <p><i className="fa fa-calendar" aria-hidden="true"></i> May 11, 2017</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Footer Widget --> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="single-footer-widget mb-70">
                            <h5 className="widget-title">Contact Us</h5>
                            <div className="contact-information">
                                <p><i className="fa fa-map-marker" aria-hidden="true"></i> 4545-A Timmers Way, Norcross, GA </p>
                                <a href="callto:770-921-0077"><i className="fa fa-phone" aria-hidden="true"></i> 770-921-0077</a>
                                <a href="mailto:info@cttdvn.org"><i className="fa fa-envelope" aria-hidden="true"></i> info@cttdvn.org</a>
                                <p><i className="fa fa-clock-o" aria-hidden="true"></i> Mon - Fri: 08.00 am - 5:30 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Copwrite Area --> */}
        <div className="copywrite-area">
            <div className="container h-100">
                <div className="row h-100 align-items-center flex-wrap">
                    {/* <!-- Copywrite Text --> */}
                    <div className="col-12 col-md-6">
                        <div className="copywrite-text">
                            <p>{/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | GX CTTĐVN - ATL<a href="https://colorlib.com" target="_blank"></a>
                            {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            </p>
                        </div>
                    </div>
                    {/* <!-- Footer Social Icon --> */}
                    <div className="col-12 col-md-6">
                        <div className="footer-social-icon">
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        // <!-- ##### Footer Area End ##### -->
    );
};

export default footer;