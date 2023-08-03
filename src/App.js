import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: false}

  onClickToggle = () => {
    this.setState(prevState => ({showClock: !prevState.showClock}))
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          onClick={this.onClickToggle}
          className="toggle-button"
        >
          {showClock ? 'Show Clock' : 'Hide Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
