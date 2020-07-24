
import React, { Component } from 'react';

class Time extends Component {

constructor(props) {
    super(props)
    
   const today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); 
    this.state = {
      currentTime: time
    }

    // if (this.state.currentTime > "22:0:0") {
    //     console.log(this.state.currentTime)
    // } else {
    //     console.log("Light")
    // }
    console.log(this.state.currentTime);
  }
  render() {
    return (
      <div>
        <p>
          
        </p>
      </div>
    );
  }
}

export default Time;