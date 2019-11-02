import React from 'react'
import __html from '../html/Library.js'

class Library extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default Library
