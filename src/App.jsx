// eslint-disable-next-line
import React, { Component, Fragment } from 'react'
import getWords from './api'
import Header from './components/Header'
import './style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      words: [],
      current: '',
      time: 3,
      score: 0
    }
  }

  componentDidMount () {
    getWords().then(({ data }) => this.setState(({ words }) => ({ words: [...data.words] })))
  }

  verifyWord = () => {
     
  }

  render() {
    return (
      <>
        <Header>
          <span className='desc'>
            Just type word in less 3 seconds
          </span>
        </Header>

        <main className='content-game'>

          <section className='inputs-words'>
            <input type='text' disabled='disabled' className='words' value={this.state.words[Math.floor(Math.random() * this.state.words.length)]} />

            <input type='text' className='send' onKeyDown={this.verifyWord} />
          </section>

          <section className='timer-score'>

            <label htmlFor='timer'>Time left: </label>
            <input type='time' name='timer' id='timer' className='timer' value='00:04' disabled />

            <label htmlFor="score">Score: </label>
            <input type='number' name='score' id='score' value='0' disabled />

          </section>
        </main>
      </>
    )
  }
}

export default App
