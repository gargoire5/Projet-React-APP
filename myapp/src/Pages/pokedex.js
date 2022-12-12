import { useEffect, useState } from "react";
import { GetAll } from "../API/pokedex";


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
    return <div className="pokemon-list">
        <div className="flex">
        {
            pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon">
                <img className="avatar" src={pokemon.img} />
                <h2>{pokemon.name}</h2>
                <h2>{pokemon.type1}</h2>
                <h2>{pokemon.type2}</h2>
            </div>
            })
        }
        </div>
    </div>;
}
export default Pokedex;