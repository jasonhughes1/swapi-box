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
  }


  componentDidMount() {
    const films = fetch('https://swapi.co/api/films/').then(data => data.json())
    const people = fetch('https://swapi.co/api/people/').then(data => data.json())
    const planets = fetch('https://swapi.co/api/planets/').then(data => data.json())
    const vehicles = fetch('https://swapi.co/api/vehicles/').then(data => data.json())

    return Promise.all([films, people, planets, vehicles])
      .then(data => {
        const People = this.fetchHomeworld(data[1].results)
          .then(data => this.fetchSpecies(data))
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
console.log(data);
    if(data) {
      console.log(data);
      return (
        <div className="App">
          <Scroll data={data[0]} />
          <div className='button-container'>
            <Button buttonText='people' className={'button main-btn'}
            />
            <Button buttonText='planets' className={'button main-btn'} />
            <Button buttonText='vehicles' className={'button main-btn'} />
          </div>
          <CardContainer cardType={data[1]} />
        </div>
      )
    } else {
      return (
        <div>
          <h2 className='loading'>Loading...</h2>
        </div>
      )
    }
  }
}

export default App;
