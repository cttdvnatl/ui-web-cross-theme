import React from 'react'
import __html from '../html/TinTucs.js'

class TinTuc extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default TinTuc
