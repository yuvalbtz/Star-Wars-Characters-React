import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
         
           <img style={{padding:0, margin:0, zIndex:1, width:45}}  src="https://cdn.shoplightspeed.com/shops/622137/files/17334878/800x1024x2/popsockets-popsockets-holder-star-wars-icon.jpg"/>
          
          <Typography variant="h6" color="inherit">
          Star Wars - Characters
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}