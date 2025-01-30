import './Pokedex.css'
import { Pokedex } from "./Pokedex.tsx"
import {PokecardProps, Pokecard} from './Pokecard'



export type PokegameProps = {
    pokeArr : PokecardProps[]
}

export function Pokegame(pokeProps : PokegameProps) {
     const pokeRandom1: PokecardProps[] = Array.from({ length: 4 }, () => pokeProps.pokeArr[Math.floor(Math.random() * pokeProps.pokeArr.length)]);
     const pokeExp1: number = pokeRandom1.reduce((acc, curr) => acc + curr.base_experience, 0);
     const pokeRandom2: PokecardProps[] = Array.from({ length: 4 }, () => pokeProps.pokeArr[Math.floor(Math.random() * pokeProps.pokeArr.length)]);
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

export default Pokedex