import axios from "axios";

export const AddToPokedex =  async (pokemon) => {
    console.log('Got body_insert:', pokemon.name, pokemon._id, pokemon.type);
    const url = 'http://localhost:4444/pokedex/insert';
    let name = pokemon.name
    let img = pokemon.img
    let imgtype1 = pokemon.imgtype1
    let imgtype2 = pokemon.imgtype2
    let type1 = pokemon.type1
    let type2 = pokemon.type2
    axios.post(url,{name,type1,type2,img,imgtype1,imgtype2})
    .then(response => console.log(response.status))
    .catch(err => console.warn(err));
}


export default AddToPokedex;