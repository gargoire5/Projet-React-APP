import { useEffect, useState } from "react";
import { DeletePokemon } from "../API/deletePokemon";
import { getAll } from "../API/pokemon";
import { RenamePokemon } from "../API/renamePokemon";
import 'semantic-ui-css/semantic.min.css';
import React from "react";
import './listingPokemon.css';
import { Grid, Card } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import axios from "axios";


function ManagePokemon(props){
    const [ pokemons, setPokemons ] = useState([]);
    const [count, setCount] = useState(0);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        const url = 'http://localhost:4444/pokemon/insert';
        let name = data.name
        let type1 = data.type1;
        let type2 = data.type2;
        axios.post(url,[{name,type1,type2}])
        .then(response => console.log(response.status))
        .catch(err => console.warn(err));
    }    
    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[count]);
    return (<Grid container columns={3}>
                <p>Créer Un nouveau pokemon</p>
                 <form onSubmit ={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="First name" />
                    <input {...register("type1")} placeholder="type1" />
                    <input {...register("type2")} placeholder="type2" />
                    <button onClick={()=>{ setCount(count+1)}}>Create! </button>
                </form>
                <p>Modifier les Pokemon existants</p>
                {
                    pokemons.map((pokemon,key) =>{
                    return <Grid.Column container>
                                <Card key={key}>
                                    <img className="avatard" src={pokemon.img} />
                                    <h2>Nom : {pokemon.name}</h2>
                                <Card.Content>
                                    <Card.Header>
                                        <input type="text" id = {key} name ="name"  placeholder="Nouveau Nom"/>
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content extra>
                                    <button className="buttonmod1" onClick={()=>{RenamePokemon(pokemon, key); setCount(count+1);}} > Renommer ! {pokemon.name}</button>
                                    <button className="buttonmod2" onClick={()=>{DeletePokemon(pokemon); setCount(count+1);}}>Supprimer !</button>
                                </Card.Content>
                                </Card>
                    </Grid.Column>;
            })
        }
    </Grid>)
}

export default ManagePokemon;

