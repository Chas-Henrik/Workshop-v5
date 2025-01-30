import './Pokecard.css'

export type PokecardProps = {
    id: number;
    name: string;
    type: string;
    base_experience: number;
};


export function Pokecard({id, name, type, base_experience}: PokecardProps) {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="pokecard">
            <h2>{name}</h2>
            <img src={imgSrc} alt={name + "avatar image"}/>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard