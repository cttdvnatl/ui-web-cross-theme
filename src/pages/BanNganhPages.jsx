import React from 'react'

const BanNganhPages = ({match}) => {
  const value = "../img/core-img/" + match.params.name + ".jpg";
  switch(match.params.name) {
    case "SDTC":
      break;
    case "KCS":
      var name = "Khối Cơ Sở";
      break;
    case "KDS":
      var name = "Khối Đời Sống";
      break;
    case "KGD":
      var name = "Khối Giáo Dục";
      break;
    case "KHC":
      var name = "Khối Hành Chánh";
      break;
    case "KPT":
      var name = "Khối Phụng Tự";
      break;
    case "KTG":
      var name = "Khối Truyền Giáo";
      break;
  }
  return (
    <>
    <h1>{name}</h1>
    <img src={value} alt=""/>
    </>
  );
}

export default BanNganhPages
