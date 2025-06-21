import { useState,useEffect } from "react";
import {CartoonCards} from "./CartoonCards";
import"./Cartoon.css"
 const  Cartoon=()=>{
   const[cartoon,setCartoon]=useState([]);
   const[loading,setLoading]=useState(true);
   const[error,setError]=useState("");
   const[search,setSearch]=useState("");
   const API="https://pokeapi.co/api/v2/pokemon?limit=24";
   const fetchPokemon=async()=>{
      try{
       const res=await fetch(API);
       const data=await res.json();
      //  console.log(data);
       const detailedData=data.results.map(async(currData)=>{
         const res =await fetch(currData.url)
         const data=await res.json();
         //  console.log(data);
         return data;
       })
       const detailedResponse=await Promise.all(detailedData);
       console.log(detailedResponse);
       setCartoon(detailedResponse);
       setLoading(false);
       //✅ cartoon me ab Pokémon data store ho gaya

      }catch(error){
         console.log(error);
         setError(error)
      }
   }
   useEffect(()=>{
        fetchPokemon();
   },[]);
   const searchData=cartoon.filter((currElem)=>currElem.name.toLowerCase().includes(search.toLowerCase()));
   if(loading){
      return(
         <h1>Loading....</h1>
      )
   }
   if(error){
       return(
         <h1>{error.message}</h1>
      )
   }
   return(
<div>
      <section className="conatiner">
         <header>
            <h1>Lets Catch Pokemon</h1>
         </header>
         <div className="pokemon-search">
            <input type="text" placeholder="search pokemon" value={search} onChange={(e)=>setSearch(e.target.value)}/>
         </div>
         <div>
            <ul className="cards">
               {
                  searchData.map((currElem)=>{
                     return(
                        <CartoonCards key={currElem.id} pokemonData={currElem}/>
                     )
                  })
               }
            </ul>
         </div>
      </section>
</div>
   ) 
}
export default Cartoon;