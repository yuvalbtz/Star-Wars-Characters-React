import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Eachstar from './components/Onestar'
import Cards from './components/Cards'
import Bar from './components/Appbar'
function App() {
 



  //console.log(films)  



  return (
    <>
    <div>
      <Bar/>
    </div>
    <div className="App" >
       
       <BrowserRouter>
        
        <Switch>
        <Route  path={"/:id"}  component={Eachstar} />
        <Route  path="/" exact  component={Cards} />
        </Switch>
        </BrowserRouter>
       
       
    </div>
    </>
  );
}

export default App;
