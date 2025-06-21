 import{useState,useEffect} from "react";
import "./UseEffect.css";

 const UseEffect=()=>{
    const[apiData,setApiData]=useState(null);
    const [loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    const API="https://pokeapi.co/api/v2/pokemon/pikachu"
//     const fetchPokemon=()=>{
//         fetch(API)
//     .then((res)=>res.json())
//     .then((data)=>{
//     //  console.log("API response:", data);
//         setApiData(data);
//         setLoading(false);
//     })
//     .catch((error)=>{console.log(error);
//         setError(error);
// setLoading(false);
//     })
// }
const fetchPokemon=async()=>{
    try{
  const res=await fetch(API);
   const data=await res.json();
       setApiData(data);
      setLoading(false);
    }catch(error){
        console.log(error);
         setError(error);
         setLoading(false);
    }
}
    useEffect(()=>{
        fetchPokemon();
    },[])
    console.log(apiData);
    if(loading) return (
    <div>
        <h1>Loading....</h1>
    </div>
    )
    if(error) return(
        <div>
            <h1>Error:{error.message}</h1>
        </div>
    )
    // if(apiData){
    //fetch apin bs ek br chlega array dependecy k bhje s [] 
    return(
        <section className="container">
           <header>
            <h1>Lets Catch Pokemon</h1>
           </header>
           <ul className="card-demo">
            <li className="pokemon-card">
                <figure>
                   <img src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} className="pokemon-image" />
                </figure>
                <h1>{apiData.name}</h1>
                <div className="grid">
                    <p className="info">
                        Height:<span>{apiData.height}</span>
                    </p>
                    <p className="info">
                        Weight:<span>{apiData.weight}</span>
                    </p>
                    <p className="info">
                        speed:<span>{apiData.stats[5].base_stat}</span>
                    </p>
                </div>
            </li>
           </ul>
        </section>
    )
}
;
 
export default UseEffect;
//Handling loading and error states in react