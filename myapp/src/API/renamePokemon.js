export const RenamePokemon = async (pokemon, newname) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'pokemontoupdate':pokemon.name,
                'name':document.getElementById(newname).value
            })
        }
    )
    const pokemonsUpdate = await response.json()
    return pokemonsUpdate
}