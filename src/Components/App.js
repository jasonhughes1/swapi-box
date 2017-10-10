import React, { Component } from 'react';
import Main from './Main';
import '../scss/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWarsData: []
    }
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

    return new Promise( ( resolve, reject ) => {
        Promise.all( [vehicles, people, planets] ).then((data) => {
          this.setState({
            data: data
          },    console.log(data));

          resolve();
        })
        .catch(e => {reject(e)})
    })
  }


  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}


export default App;
