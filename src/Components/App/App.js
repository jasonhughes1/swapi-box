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
    this.retrieveData = this.retrieveData.bind(this)
  }

  retrieveData(data) {
    fetch(`https://swapi.co/api/${data}/`)
    .then(data => data.json())
    .then(data => {
      this.data = data.results
      // this.setState({
      //   data: data.results
      // })
    })
  }
  render() {
    return (
      <div className="App">
        <Scroll retrieveData={this.retrieveData} />
        <Button buttonText='people' />
        <Button buttonText='planets' />
        <Button buttonText='vehicles' />
        <Button buttonText='View Favorites' />
        <CardContainer />

      </div>
    );
  }
}

export default App;
