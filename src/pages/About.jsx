import React from 'react'

function About() {
  const value = "../img/bg-img/logo.png";
  return (
    <div>

      <h1>
        About Us
      </h1>
      <img src ={value} alt="logo"/>
      <h3>Giáo Xứ Các Thánh Tử Đạo Việt Nam thuộc Tổng Giáo Phận Atlanta
là cộng đoàn người Công Giáo gốc Việt cùng sống cử hành,
loan truyền đức tin Công Giáo, đồng thời duy trì
và phát triển truyền thống văn hoá Việt Nam.</h3>


<h4>
  The Holy Vietnamese Martyrs Catholic Church of the Archdiocese of Atlanta is
a community of Vietnamese-American Roman Catholics who live, celebrate,
proclaim the Catholic faith as well as preserve and promote the Vietnamese cultural traditions.
</h4>
    </div>
  );
}

export default About
