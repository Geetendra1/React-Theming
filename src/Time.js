
import React, { Component } from 'react';

class Time extends Component {

constructor(props) {
    super(props)
    
   const today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); 
    this.state = {
      currentTime: time
    }

    if (this.state.currentTime > "15:0:0") {
        console.log("Dark")
    } else {
        console.log("Light")
    }
  }

  render() {
    return (
      <div>
        <p>
          { this.state.currentTime }
        </p>
      </div>
    );
  }
}

export default Time;