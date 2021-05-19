import React, { Component, useState } from "react";
import "../styles/App.css";
// import DigitalClock from "./DigitalClock";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    };
  }

  cTime() {
    this.setState({ time: new Date() });
  }

  mount() {
    this.interval = setInterval(() => {
      this.cTime();
    }, 1000);
  }

  clrTime() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Clock">
        <h1>Digital Clock</h1>
        <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;
