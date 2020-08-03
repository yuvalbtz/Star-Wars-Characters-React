import React, {useState, useEffect}  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link, Route, BrowserRouter, Switch} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin:4,
    
    
      
},
  media: {
    height: 600,
    width:400
}, 


});

export default function MediaCard() {

    const [loading, setLoading] = useState(false)
    
    const [planets, setPlanets] = useState([])
   
   
   
    useEffect(() => {
     stplanets()
    
    },[])
    
    const stplanets = async () => {
     const dataplanets = await fetch("https://raw.githubusercontent.com/akabab/starwars-api/master/api/all.json")
     const res = await dataplanets.json();
     setPlanets(res)
     setLoading(true)
    // console.log(res)
    }
  
  
  
   



const classes = useStyles();


 

 
  return (
    <>
    { loading ? (planets.map(film => 
    <Card  key={film.id}  className={classes.root}>
       <Link to={`/${film.id}`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={film.image}
          
         
       />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
           {film.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {film.wiki}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      
    </Card>)) : (<><span style={{position:'absolute', top:300, bottom:0}}>Loading....<CircularProgress  disableShrink  /></span></>)}
    
    
    
</>
 );
}
