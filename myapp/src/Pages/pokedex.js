import { useEffect, useState } from "react";
import { GetAll } from "../API/pokedex";
import './listingPokemon.css';
import React from "react";
import { Grid, Card} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'


function Pokedex(props){
    const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = GetAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return (<Grid container columns={3}  >
        {
            pokemons.map((pokemon,key) =>{
            return <Grid.Column container>  
                    <Card key={key}>
                        <h1>{pokemon.name}</h1>
                        <img className="avatard" src={pokemon.img} />
                    <Card.Content>
                        <h2><img className="avatarp" src={pokemon.imgtype1} />{pokemon.type1}</h2>
                        <h2><img  className="avatarp" src={pokemon.imgtype2} />{pokemon.type2}</h2>
                    </Card.Content>
                    </Card>
                </Grid.Column>
            })
        }
    </Grid>) 
}
export default Pokedex;