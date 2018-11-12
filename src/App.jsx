// eslint-disable-next-line
import React, { Component, Fragment } from 'react'
import getWords from './api'
import randomItem from './utils/randomItem'
import Header from './components/Header'
import './style.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      words: [],
      randomWord: '',
      time: 3,
      score: 0
    }

    this.$inputTimer = React.createRef()
  }

  componentDidMount() {
    getWords().then(({ data }) => this.setState(({ words, current }) => ({
      words: [...data.words],
      randomWord: randomItem([...data.words])
    })))
  }

  randomizeWords = () => this.setState(({ randomWord, words }) => ({ randomWord: randomItem(words) }))

  addScore = () => this.setState({ score: this.state.score + 1 })

  startChallenge = ({ target }) => {
    const { randomWord } = this.state

    if (target.value === randomWord) {
      this.addScore()
      this.randomizeWords()
      target.value = ''
    }
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
            <input type='text' disabled='disabled' className='words' value={this.state.randomWord} />

            <input type='text' className='send' onChange={this.startChallenge} />
          </section>

          <section className='timer-score'>

            <span>Time left: </span>
            <span className='timer'>{this.state.time}</span>

            <span>Score: </span>
            <span className="score">{this.state.score}</span>

          </section>
        </main>
      </>
    )
  }
}

export default App
