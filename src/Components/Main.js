import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Favorites from './Favorites';
import People from './People';
import Vehicles from './Vehicles';
import Planets from './Planets';


const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/favorites' component={Favorites}/>
        <Route path='/people' component={People}/>
        <Route path='/vehicles' component={Vehicles}/>
        <Route path='/planets' component={Planets}/>
      </Switch>
    </div>
  )
}

export default Main;
