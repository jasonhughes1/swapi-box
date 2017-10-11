import React, { Component } from 'react';
import Main from './Main';
import '../scss/App.css';
import HomePage from './HomePage';
import Scroller from './Scroller';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWarsData: null,
    }
    this.retreiveStarWarsData();
  }

  componentDidMount() {
    this.setState({
      starWarsData: this.retreiveStarWarsData()
    })
  }

  retreiveStarWarsData() {
    const vehicles = fetch('https://swapi.co/api/vehicles').then(data => data.json())
    const people = fetch('https://swapi.co/api/people').then(data => data.json())
    const planets = fetch('https://swapi.co/api/planets').then(data => data.json())

    return Promise.all( [vehicles, people, planets] )
      .then(data => {
        this.setState({
          starWarsData: data
        })
      })
    .catch((e) => {console.log(e)})
  }


  // render() {
  //   const { data } = this.state
  //
  //   if(data) {
  //     return (
  //       <div className="App">
  //         <Scroller starWarsData={this.state.data[0].results} />
  //         <Main />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         Loading
  //       </div>
  //     )
  //   }
  // }

  render() {
    console.log(this.state.starWarsData);
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}


export default App;
