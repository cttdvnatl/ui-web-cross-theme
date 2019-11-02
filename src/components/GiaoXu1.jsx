import React from 'react'
import __html from '../html/GiaoXu.js'

class ThuVien extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default ThuVien
