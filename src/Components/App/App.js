import React, { Component } from 'react';
import './App.css';
import Scroll from '../Scroll/Scroll';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.data = []
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: this.retrieveData()
    })
  }

  retrieveData() {
    const films = fetch('https://swapi.co/api/films/').then(data => data.json())
    console.log(films);
    const people = fetch('https://swapi.co/api/people/').then(data => data.json())
    const planets = fetch('https://swapi.co/api/planets/').then(data => data.json())
    const vehicles = fetch('https://swapi.co/api/vehicles/').then(data => data.json())

    return new Promise((resolve, reject) => {
      Promise.all([films, people, planets, vehicles]).then((data) => {
        this.setState({
          data: data
        }, console.log(data));
        resolve();
    })
    .catch(e => {reject(e)})
  })
}

  render() {
    console.log(this.state.data);
    if(this.state.data !== this.state.data[1]) {
      return (
        <div className="App">
        <Scroll data={this.state.data[0]}/>
        <Button buttonText='people' />
        <Button buttonText='planets' />
        <Button buttonText='vehicles' />
        <Button buttonText='View Favorites' />
        <CardContainer />
        </div>
      );
    } else {
      return (
        <div>
          Loading
        </div>
      )
    }
  }
}

export default App;
