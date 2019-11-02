import React from 'react'
import __html from '../html/photo.js'

class Photo extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default Photo
