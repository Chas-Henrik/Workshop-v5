import './Pokedex.css'
import {PokecardProps, Pokecard} from './Pokecard'



export type PokedexProps = {
    isWinner: boolean;
    pokeArr: PokecardProps[];
}

export function Pokedex({isWinner, pokeArr}: PokedexProps) {
    const pokecards = pokeArr.map((pokecard: PokecardProps) => <Pokecard key={pokecard.id} {...pokecard}/>);
    const totExp = pokeArr.reduce((acc, curr) => acc + curr.base_experience, 0);

    return (
        <article className="pokedex-container">
            <h1>Pokedex</h1>
            <div className="pokedex">
                {pokecards}
            </div>
            <p>Total experience: {totExp}</p>
            <p>{isWinner && "THIS HAND WINS!"}</p>
        </article>
    )
}

export default Pokedex