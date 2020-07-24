import React, { Component } from 'react';

export default class Period extends Component {
    constructor(props) {
    super(props)
    this.state = {
            latitude:'',
            longitude:'',
            sunrise:'',
            sunset:'',
            localSunrise:'',
            localSunset: '',
            systemTime:'',
            systemDate:'',
            dark: false,
            light:false,
            period:[] 
    };
    }

  componentDidMount() {
   this.getCurrentLocation()
  }
getCurrentLocation() {
    let currentComponent = this;
   let currentData = this;
   let {items} = this.state;
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
          currentComponent.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          } ,
           function() {
             this.getUTCtime()
          }
          )
      });
    }
    }

    getUTCtime(){
        fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.latitude}&lng=${this.state.longitude}`)
        .then(res => res.json())
        .then(response => {
        this.setState({sunset:response.results.sunset})
        this.setState({sunrise:response.results.sunrise})
    } )
    .then(() => {this.getLocalTime()})
    }

    getLocalTime() {
    const ConvertSunset = new Date(`${this.state.systemDate} ${this.state.sunset} UTC`).toString().split(" ")[4]
    this.setState({
        localSunset:ConvertSunset 
    })
    const ConvertSunrise = new Date(`${this.state.systemDate} ${this.state.sunrise} UTC`).toString().split(" ")[4]
    this.setState({
        localSunrise:ConvertSunrise 
    })
    this.getSystemTimeDate()
    }

    getSystemTimeDate() {
        const currentTime = new Date().toString().split(" ")[4]
        this.setState({
            systemTime : currentTime 
        })

        const today = new Date()
        const date = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear(); 
        this.setState({
          systemDate:date
        })

        this.getTheme()
    }

    

    getTheme() {
        // if('20:20:20' > this.state.localSunrise && '20:20:20' < this.state.localSunset){
       if(this.state.systemTime > this.state.localSunrise && this.state.systemTime < this.state.localSunset){
        this.setState({
          light:true
        })
        localStorage.removeItem("dark")
    } else {
      this.setState({
          dark:true
        } )
    localStorage.setItem("dark", JSON.stringify(this.state.dark))
    }
    }


  render() {
    return (
      <div>
        <h1> UTC sunrise - {this.state.sunrise}</h1>
         <h1>UTC sunset - {this.state.sunset}</h1>
           <h1>Local sunrise - {this.state.localSunrise}</h1>
           <h1>Local sunset - {this.state.localSunset}</h1>
             <h1>System Time - {this.state.systemTime}</h1>
           <h1> System Date - {this.state.systemDate.toString()}</h1>
             <h1> Light Theme Status - {this.state.light.toString()}</h1>
           <h1> Dark Theme Status - {this.state.dark.toString()}</h1>

      </div>
    );
  }
}
