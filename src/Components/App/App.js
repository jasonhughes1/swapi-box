import React, { Component } from 'react';
import './App.css';
import Scroll from '../Scroll/Scroll';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      opening: Math.floor(Math.random() * (6 - 0 + 1)),
      i: 1,
      favClicked: false,
      favorites: []
    }
    this.changeCards = this.changeCards.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
    this.favClicked = this.favClicked.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
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
    const filmOpenings = data[0].results.map(obj => {
      return Object.assign({}, {Opening: obj.opening_crawl, Title: obj.title, Release: obj.release_date})
    })

    const mappedPeople = data[1].map(obj => {
      return Object.assign({}, {Name: obj.name, Homeworld: obj.Homeworld, Species: obj.Species, Population: obj.Population})
    })

    const mappedPlanets = data[2].map(obj => {
      return Object.assign({}, {Name: obj.name, Terrain: obj.terrain, Population: obj.population, Climate: obj.climate, Residents: obj.Residents})
    })

    const vehicles = data[3].results.map(obj => {
      return Object.assign({}, {Name: obj.name, Model: obj.model, Vehicle: obj.vehicle_class, Passengers: obj.passengers})
    })

    return [filmOpenings, mappedPeople, mappedPlanets, vehicles]
  }

  changeCards(num) {
    this.setState({i: num, favClicked: false})
  }

  findIndexInFavArray(element) {
    return this === element.Name;
  }

  setFavorite(cardData) {
    const { favorites } = this.state;

    const indexOfFavorite = favorites.findIndex(this.findIndexInFavArray, cardData.Name);

    let oldFavorites;

    if (indexOfFavorite < 0) {
      oldFavorites = [...favorites, cardData];
    } else {
      oldFavorites = favorites.slice();
      oldFavorites.splice(indexOfFavorite, 1)
    }

    this.setState({
      favorites: oldFavorites
    })
  }

  toggleActive(button) {
    const buttons = document.querySelectorAll('.active')
    buttons.forEach(button => button.classList.remove('active'))
    button.classList.toggle('active')
  }

  favClicked() {
    this.setState({ favClicked: true})
  }

  cardSet() {
    const {favClicked, favorites, data, i} = this.state;

    if (favClicked) {
      return favorites
    } else {
      return data[i]
    }
  }

  render() {
    const { data, i, opening, favorites } = this.state

    if(data) {
      return (
        <div className="App">
          <Scroll data={data[0]} toggleActive={this.toggleActive} opening={opening} btnFn={this.favClicked} numFav={favorites.length} />
          <div className='button-container'>
            <Button buttonText='people' className={'button main-btn active'} toggleActive={this.toggleActive} num={1} btnFn={this.changeCards}/>
            <Button buttonText='planets' className={'button main-btn'} toggleActive={this.toggleActive} num={2} btnFn={this.changeCards}/>
            <Button buttonText='vehicles' className={'button main-btn'} toggleActive={this.toggleActive} num={3} btnFn={this.changeCards} />
          </div>
          <CardContainer cardType={this.cardSet()} setFavorite={this.setFavorite} />
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
