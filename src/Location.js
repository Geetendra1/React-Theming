import React, { Component } from 'react';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
        lat:'',
        long:'',
        isLoaded:false,
        items:[]
    };
  }
  componentDidMount() {
   let currentComponent = this;
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
          currentComponent.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          } , function() {
            //   fetch api here 
              console.log(this.state.lat)
              console.log(this.state.long)
              fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.lat}&lng=${this.state.long}`)
              .then(res => res.json())
              .then(res => console.log(res))
          })
      });

    }

  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Location;