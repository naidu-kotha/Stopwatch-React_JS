import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {mins: 0, sec: 0, isRunning: false}

  componentDidMount() {
    this.id = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.id)
  }

  tick = () => {
    const {mins, sec, isRunning} = this.state
    if (isRunning) {
      const s = sec < 59 ? sec + 1 : 0
      const m = sec === 59 ? mins + 1 : mins
      this.setState({sec: s, mins: m})
    }
  }

  onStartButton = () => {
    this.setState({isRunning: true})
  }

  onStopButton = () => {
    this.setState({isRunning: false})
  }

  onResetButton = () => {
    this.setState({mins: 0, sec: 0, isRunning: false})
  }

  render() {
    const {mins, sec} = this.state

    const min = mins < 10 ? `0${mins}` : mins
    const second = sec < 10 ? `0${sec}` : sec
    return (
      <div className="bg">
        <div className="stopWatchContainer">
          <h1 className="heading">Stopwatch</h1>
          <div className="timerContainer">
            <div className="headingContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="imgg"
              />
              <h1 className="heading">Timer</h1>
            </div>

            <h1 className="heading">
              {min}:{second}
            </h1>
            <div className="buttonsContainer">
              <button
                type="button"
                className="startB"
                onClick={this.onStartButton}
              >
                Start
              </button>
              <button
                type="button"
                className="stopB"
                onClick={this.onStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="resetB"
                onClick={this.onResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
