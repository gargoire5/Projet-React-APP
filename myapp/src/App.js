import './App.css';
import ListingPokemon from "./Pages/listingPokemon";
import ManagePokemon from "./Pages/managePokemon";
import Pokedex from "./Pages/pokedex";
import Home from "./Pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";

function App(props) {
  return <Router>
      <div>
        <nav>
          <ul>
              <li><Link to="/ListingPokemon">Liste des Pokemon disponibles</Link></li>
              <li><Link to="/ManagePokemon">Page pour gerer les pokemons</Link></li>
              <li><Link to="/Pokedex">Mon pokedex personnel</Link></li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/"> {/*ici on met l'URL dans le navigateur*/}
          <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route path="/ListingPokemon">
          <ListingPokemon />
        </Route>
        <Route path="/ManagePokemon">
          <ManagePokemon />
        </Route>
        <Route path="/Pokedex">
          <Pokedex />
        </Route>
      </Switch>
  </Router> 
}
fg
export default App;

