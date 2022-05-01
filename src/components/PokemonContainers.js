import { useEffect, useState } from "react"

const PokemonContainers = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons()
    }, [])

    // se crea una función que trabaja con la api pasando los parámetros
    const getPokemons = () => {
        const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=25'

        //el fetch de por sí es devuelve una promesa en base al pedido de la URL
        fetch(URL) // Una alternativa es el uso de AXIOS
            // al recibir la respuesta se hace una conversion a JSON de la misma para poder trabajarla mejor, pero ese método de json también trae una promesa, 
            // así que neceistamos otro .then
            .then( response =>  response.json())
            // este 2do then se corresponde a la promesa que devuelve el response.json() y lo metemos en la variable data, 
            // y esa variable la mandamos a useState para cargar los resultados
            .then( data => {
                console.log((data.results));
                setPokemons(data.results);
            })         
    }


  return (
    //con los resultados cargados en pokemons usamos map para bajar cada item a la variable pokemon y generar el listado. Se usa la URL como key porque la api no tiene un id 
    //para los pokemons
    <div>{pokemons.map(pokemon => <li key={pokemon.url}> {pokemon.name}</li>)}</div>
  )
}
export default PokemonContainers