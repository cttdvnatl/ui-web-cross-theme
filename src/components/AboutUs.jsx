import React from 'react'
import __html from '../html/About.js'

class About extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default About
