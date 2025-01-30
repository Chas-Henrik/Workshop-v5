import './App.css'
import { Pokedex } from './Pokedex'
import { PokecardProps } from './Pokecard'

const pokemons = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
];

function App() {
  const pokeRandom1: PokecardProps[] = Array.from({ length: 4 }, () => pokemons[Math.floor(Math.random() * pokemons.length)]);
  const pokeExp1: number = pokeRandom1.reduce((acc, curr) => acc + curr.base_experience, 0);
  const pokeRandom2: PokecardProps[] = Array.from({ length: 4 }, () => pokemons[Math.floor(Math.random() * pokemons.length)]);
  const pokeExp2: number = pokeRandom2.reduce((acc, curr) => acc + curr.base_experience, 0);
  const winner1: boolean = pokeExp1 > pokeExp2;
  const winner2: boolean = pokeExp2 > pokeExp1;

  return (
    <>
      <Pokedex isWinner={winner1} pokeArr={pokeRandom1}/>
      <p></p>
      <Pokedex isWinner={winner2} pokeArr={pokeRandom2}/>
    </>
  )
}

export default App
