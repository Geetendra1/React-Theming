import React, { Component } from 'react';

// class Location extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         lat:'',
//         long:'',
//         isLoaded:false,
//         items:[],
//         sunrise:''
//     };
//   }
//   componentDidMount() {
//    let currentComponent = this;
//    let currentData = this;
//    let {items} = this.state;
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition(function(position) {
//           currentComponent.setState({
//           lat: position.coords.latitude,
//           long: position.coords.longitude,
//           } , function() {
//             //   fetch api here 
//               console.log(this.state.lat)
//               console.log(this.state.long)
//               fetch(`https://api.sunrise-sunset.org/json?lat=${this.state.lat}&lng=${this.state.long}`)
//                .then(res => res.json())
//                .then((data) => {
//                    this.setState({
//                        items: data.items
//                    } , function() {
//                        console.log(items);
//                    })
//                }, 
//                (error) => {
//                    this.setState({
//                        error
//                    })
//                })
//           })
//       });

//     }

//   }
//   render() {
//     return (
//       <div>
//       </div>
//     );
//   }
// }

// export default Location;


class Location extends React.Component {
    state = {
      error: null,
      faqs: []
    };


    componentDidMount = () => {
    fetch('https://api.sunrise-sunset.org/json?lat=22.9418&lng=81.0768')
    .then(res => res.json())
    .then(response => {
      this.setState({faqs: response.results}, () => console.log(this.state.faqs));
    } );
    // .then(response => {
    //   this.setState({faqs: response.data}, () => console.log(this.state.faqs));

    // } )
    //   .then(
    //     (data) => {
    //       this.setState({
    //         items: data.items
    //       }, () => {
    //           debugger
    //           console.log(this.state.items)
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }

  render() {
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
      return (
    //     <ul>
    //       {items.map(item => (
    //         <li>
    //           {item} 
    //         </li>
    //       ))}
    //     </ul>
    <div></div>
      );
    // }
  }
}
export default Location
