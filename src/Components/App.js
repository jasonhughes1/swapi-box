import React, { Component } from 'react';
import Main from './Main';
import HomePage from './HomePage';
import Scroller from './Scroller';
import '../scss/App.css';

class App extends Component {
  constructor() {
  super();

  this.state = {
    starWarsData: null
  }
  this.retrieveData()
}
  //     filmData: null,
  //     peopleData: null,
  //     planetData: null,
  //     vehicleData: null,
  //     favoriteCards: [],

  retrieveData() {
    const films = fetch('https://swapi.co/api/films/').then(data => data.json())
    const people = fetch('https://swapi.co/api/people/').then(data => data.json())
    const planets = fetch('https://swapi.co/api/planets/').then(data => data.json())
    const vehicles = fetch('https://swapi.co/api/vehicles/').then(data => data.json())
    console.log(planets);

    return Promise.all([films, people, planets, vehicles])
      .then((data) => {
        this.setState({starWarsData: data})
      })
      .catch((e) => {console.log(e)})
  }

  render() {
    const { data } = this.state

    if(data) {
      return (
        <div className="App">
          <Scroller data={this.state.starWarsData[0].results} />
          <Main />
          <HomePage />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Load Error</h1>
        </div>
      )
    }
  }
}

export default App;
