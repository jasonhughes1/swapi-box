import React, { Component } from 'react';
import Main from './Main';
import '../scss/App.css';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state {
  //     filmData: null,
  //     peopleData: null,
  //     planetData: null,
  //     vehicleData: null,
  //     favoriteCards: [],
  //   }
  // };

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
