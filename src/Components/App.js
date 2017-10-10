import React, { Component } from 'react';
import Scroller from './Scroller';
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
        <Scroller />
        <Main />
      </div>
    );
  }
}

export default App;
