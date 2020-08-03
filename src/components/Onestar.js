import React, {useEffect, useState} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import './ap.css';
function Onestar({match}) {
   
   useEffect(() => {
    fetchitem()
  
},[]);

   const [oneperson, setOneoperson] = useState([])
   const [loading, setloading] = useState(false)
   const fetchitem = async () => {
       const items = await fetch(`https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/${match.params.id}.json`);
       const res = await items.json()
       setOneoperson(res)
      // console.log(res)
      setloading(true)
    }
   
 
   
   
   
    return (
        <>
        {loading ? (<> <img className="imageanime" src={oneperson.image} style={{height:400, width:360,borderRadius:10, margin:15, top:0, position:'relative', justifyContent:'center', alignItems:'center'}} />
        
        <div className="detailanime" style={{display:'flex-block', justifyContent:'center', alignItems:'center', top:0, position:'relative'}} >
        
         <h2 style={{marginTop:10,color:'white'}}>Name: {oneperson.name}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Homeworld: {oneperson.homeworld}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Species: {oneperson.species}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Skin Color: {oneperson.skinColor}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Hair Color: {oneperson.hairColor}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Gender: {oneperson.gender}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Died Location: {oneperson.diedLocation}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Height: {oneperson.height}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Eye Color: {oneperson.eyeColor}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Died: {oneperson.died}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Born: {oneperson.born}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Cybernetics: {oneperson.cybernetics}</h2>
         <h2 style={{marginTop:10,color:'white'}}>Mass: {oneperson.mass}</h2>
         
         </div></>) : (<span style={{position:'absolute', top:300, bottom:0}}>Loading....<CircularProgress  disableShrink  /></span>) }
        
    </>
    )
}

export default Onestar
