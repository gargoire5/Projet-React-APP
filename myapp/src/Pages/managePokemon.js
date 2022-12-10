import { useEffect,useState } from "react";
import { insert } from "../API/insertpokemon";

function ManagePokemon(props){
    const [ pokemons, insertPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = insert();
    pokemonsFetched
        .then(result => insertPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    return <div className="pokemon-list">
        <div class="flex">
        {
            pokemons.map((pokemon,key) =>{
            return <div key={key} className="bloc-pokemon">
                    <h1>Nom du pokemon</h1>
            </div>
            })
        }
        </div>
    </div>;
}
export default ManagePokemon;