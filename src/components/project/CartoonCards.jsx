 import"./Cartoon.css"
 export const CartoonCards=({pokemonData})=>{
return(
    <li className="pokemon-card">
        <figure>
            <img src={pokemonData.sprites.other.dream_world.front_default} className="pokemon-img"/>
        </figure>
        <h1 className="pokemon-name">{pokemonData.name}</h1>
        <div className="pokemon-data">
            <p>
                {pokemonData.types.map((curr)=>curr.type.name).join(" ,")}
            </p>
        </div>
        <div className="pokemon-info">
            <p className="info">
            <span>Height:</span>{pokemonData.height}
            </p>
            <p className="info">
                <span>Weight:</span>{pokemonData.weight}
            </p>
            <p className="info">
                <span>speed:</span>{pokemonData.stats[5].base_stat}
       </p>
               {/* <p className="info">
                <span>Attack:</span>{pokemonData.stats[1].base_stat}
              </p> */}
        </div>
    </li>
)
}