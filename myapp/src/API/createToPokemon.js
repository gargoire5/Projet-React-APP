export const AddPokemon = async (pokemon) => {
    const response = await fetch(
          'http://localhost:4444/pokemon/insert', {
              method: 'POST', 
             headers: {
                 'Accept': 'application/json', 
              'Content-Type':'application/json'
              },
              body:JSON.stringify({
                  'name':pokemon.name,
                 'type1':pokemon.type1,
                 'type2':pokemon.type2
              })
          }
      )
      const pokemonsAdd = await response.json()
       return pokemonsAdd
   }