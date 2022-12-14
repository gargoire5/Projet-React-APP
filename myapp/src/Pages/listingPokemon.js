import React, { useEffect, useState } from "react";
import { getAll } from "../API/pokemon";
import { AddToPokedex } from "../API/addpokedex";
import './listingPokemon.css';
import { Grid, Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'


function ListingPokemon(){
    const [ pokemons, setPokemons ] = useState([]);
    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return  (<Grid container columns={3} >
                <p className="title">Voici les Pokemons disponibles sur le site, cliquez sur la pokeball pour les capturer :</p>

                {
                
                    pokemons.map((pokemon,key) =>{
                    return <Grid.Column container>                               
                            <Card key={key}>
                                <h1>{pokemon.name}</h1>
                                <img className="avatard" src={pokemon.img} />
                                <Card.Content>
                                    <Card.Header>
                                        <h2><img  className="avatarp" src={pokemon.imgtype1} />{pokemon.type1}</h2>
                                        <h2><img  className="avatarp" src={pokemon.imgtype2} />{pokemon.type2}</h2>
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <button onClick={()=>AddToPokedex(pokemon)}><img className="pokeball"  src="https://img.icons8.com/color/512/pokeball-2.png"/></button>
                                </Card.Content>
                                </Card>
                        </Grid.Column>        

                    })

                }
            </Grid>
            )
}
export default ListingPokemon;
