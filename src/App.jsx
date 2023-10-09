import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)
  
  const handleClickMore = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const handleClickLess = () => {
    setPokemonIndex(pokemonIndex - 1)
  }


  return (
    <>
    
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        {pokemonIndex > 0 ? <button onClick={handleClickLess}>Précèdant</button> : null }
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickMore}>Suivant</button> : null}
      
    </>
  )
}

export default App
