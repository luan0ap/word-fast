import React, { Component } from 'react'
import get from './api'

get().then(console.log)

class App extends Component {
  render () {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default App
