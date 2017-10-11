import React, { Component } from 'react';
import Main from './Main';
import HomePage from './HomePage';
import Scroller from './Scroller';
import '../scss/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    }
  }
  //     filmData: null,
  //     peopleData: null,
  //     planetData: null,
  //     vehicleData: null,
  //     favoriteCards: [],

  componentDidMount() {
    const films = fetch('https://swapi.co/api/films/').then(data => data.json())
    const people = fetch('https://swapi.co/api/people/').then(data => data.json())
    const planets = fetch('https://swapi.co/api/planets/').then(data => data.json())
    const vehicles = fetch('https://swapi.co/api/vehicles/').then(data => data.json())

    let cleanedPeopleData = [];

    return Promise.all([films, people, planets, vehicles])
      .then(data => {
        const People = this.fetchHomeworld(data[1].results)
          .then(data => this.fetchSpecies(data))
        console.log(this.fetchResidents(data[2].results));
        const Planets = this.fetchResidents(data[2].results)

      return Promise.all([films, People, Planets, vehicles])
        .then(data => {
          this.setState({data: this.cleanData(data)})
        })
      })

  }

  fetchHomeworld(data) {
    const specificHomeworldData = data.map((world, i) => {
      return fetch(world.homeworld)
      .then(res => res.json())
    })

    return Promise.all(specificHomeworldData).then( homeworlds => {
      return homeworlds.map((homeworld, i) => {
        return Object.assign(data[i], {Homeworld: homeworld.name, Population: homeworld.population})
      })
    })
  }

  fetchSpecies(data) {
    const specificSpeciesData = data.map((species, i) => {
      return fetch(species.species)
      .then(res => res.json())
    })

    return Promise.all(specificSpeciesData).then( species => {
      return species.map((specie, i) => {
        return Object.assign(data[i], {Species: specie.name})
      })
    })
  }

  fetchResidents(data) {
    const specificResidentsData = data.map( (planets, i) => {

      const specificResidents = planets.residents.map((link, i) => {
        return fetch(link)
        .then(res => res.json())
      })

      return Promise.all(specificResidents).then( people => {
        return Object.assign(planets, {Residents: people})
      })
    })

    return Promise.all(specificResidentsData)
  }

  cleanData(data) {

    const filmOpenings = data[0].results

    const mappedPeople = data[1].map(obj => {
      return Object.assign({}, {Name: obj.name, Homeworld: obj.Homeworld, Species: obj.Species, Population: obj.Population})
    })

    const mappedPlanets = data[2].map(obj => {
      return Object.assign({}, {Name: obj.name, Terrain: obj.terrain, Population: obj.population, Climate: obj.climate, Residents: obj.Residents})
    })

    const vehicles = data[3].results

    return [filmOpenings, mappedPeople, mappedPlanets, vehicles]
  }


  render() {
    const { data } = this.state
    console.log({data});
    if(data) {
      return (
        <div className="App">
          <Scroller data={this.state.data[0].results} />
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
