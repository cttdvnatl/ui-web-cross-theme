import React from 'react'
import __html from '../html/Event.js'

class Events extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{__html}}/>
  }
}

export default Events
