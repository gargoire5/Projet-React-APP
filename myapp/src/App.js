import './App.css';
import 'semantic-ui-css/semantic.min.css'

import ListingPokemon from "./Pages/listingPokemon";
import ManagePokemon from "./Pages/managePokemon";
import Pokedex from "./Pages/pokedex";
import Navbar from './Components/navBar';
import {
  BrowserRouter as Router,
  Route
  } from "react-router-dom";
    
function App(props) {
  return <Router>
        <Navbar />
        <img style={{marginTop:'40px'}} src="https://www.pokebip.com/membres/galeries/1499/1499864423000762800.png"/>
        <Route exact path="/">
          <ListingPokemon />
        </Route>
        <Route path="/Pokedex">
          <Pokedex />
        </Route>
        <Route path="/ManagePokemon">
          <ManagePokemon />
        </Route> 
  </Router> 
}

export default App;
