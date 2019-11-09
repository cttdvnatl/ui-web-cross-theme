/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
const slider = (prop) => {
    return (
        <Carousel fade={true}>
          {prop.data.map((slide, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 image-container"
                  src={slide.src}
                  alt={`slide ${index}`}
                />
                <Carousel.Caption>
                  <h2 data-animation="fadeInUp" data-delay="100ms">{slide.title}</h2>
                  {slide.sumary.map((line, ind) => <p data-animation="fadeInUp" data-delay="400ms" key={ind}>{line}</p>)}
                  <a href="#" className="btn crose-btn" data-animation="fadeInUp" data-delay="500ms">{slide.button}</a>
                </Carousel.Caption>
              </Carousel.Item>  
            );
          })}
</Carousel>
/** Put here for reference. I'll delete all commented codes in the next PR */
        // <div>
        // {/* <!-- ##### Hero Area Start ##### --> */}
        // <section className="hero-area hero-post-slides owl-carousel">
        //     {/* <!-- Single Hero Slide --> */}
        //     <div className="single-hero-slide bg-img bg-overlay d-flex align-items-center justify-content-center">
        //         {/* <!-- Post Content --> */}
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-12">
        //                     <div className="hero-slides-content">
        //                         <h2 data-animation="fadeInUp" data-delay="100ms">Ý Cầu Nguyện của Đức Thánh Cha tháng 2/2019</h2>
        //                         <p data-animation="fadeInUp" data-delay="300ms">Cầu xin cho mọi người có quảng đại đón tiếp những nạn nhân của việc
        //                             buôn bán người,<br/> của việc cưỡng bức mại dâm và của bạo động.</p>
        //                         <a href="#" className="btn crose-btn" data-animation="fadeInUp" data-delay="500ms">About Us</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {/* <!-- Single Hero Slide --> */}
        //     <div className="single-hero-slide bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: 'url("img/bg-img/interior2.jpg")'}}>
        //         {/* <!-- Post Content --> */}
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-12">
        //                     <div className="hero-slides-content">
        //                         <h2 data-animation="fadeInUp" data-delay="100ms">Giờ Lễ</h2>
        //                         <p data-animation="fadeInUp" data-delay="400ms">Thứ Hai - Thứ Bảy: 8:00<br/>
        //                             Thứ Năm - Thứ Sáu: 19:00<br/>
        //                             Thứ Bảy: Lễ Vọng Chủ Nhật 17:30  <br/>
        //                             Chủ Nhật: 7:30 ; 9:30 ; 11:30  và 13:30 <br/><br/>
        //                             <b>Giải Tội:</b> Ngày thường: Sau thánh Lễ  8:00 - Thứ Bảy: 16:30 - 17:15 <br/>
        //                             <b>Rửa tội trẻ em: </b>Lớp Giáo Lý: CN tuần thứ I 9:30 - 10:30 - Rửa Tội: Tuần II sau lễ 8:00 <br/>
        //                             <b>Xức dầu bệnh nhân: </b>Hàng tháng sau Lễ CN thứ III<br/>
        //                             <b>KHẨN CẤP: 770-910-2443</b>
        //                         </p>
        //                         <a href="#" className="btn crose-btn" data-animation="fadeInUp" data-delay="500ms">Contact Us</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        // {/* <!-- ##### Hero Area End ##### --> */}
        // </div>
    );
};

export default slider;