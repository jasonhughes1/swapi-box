import React, { Component } from 'react';
import './App.css';
import Scroll from '../Scroll/Scroll';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
    this.retrieveData()
  }



  retrieveData() {
    const films = fetch('https://swapi.co/api/films/').then(data => data.json())
    const people = fetch('https://swapi.co/api/people/').then(data => data.json())
    const planets = fetch('https://swapi.co/api/planets/').then(data => data.json())
    const vehicles = fetch('https://swapi.co/api/vehicles/').then(data => data.json())

    return Promise.all([films, people, planets, vehicles])
    .then((data) => {
      this.setState({data: data})
    }).catch((e) => {console.log(e)})
  }

  render() {
    const { data } = this.state

    if(data) {
      return (
        <div className="App">
        <Scroll data={this.state.data[0].results}/>
        <Button buttonText='people' />
        <Button buttonText='planets' />
        <Button buttonText='vehicles' />
        <Button buttonText='View Favorites' />
        <CardContainer />
        </div>
      )
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
