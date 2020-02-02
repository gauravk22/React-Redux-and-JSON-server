import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,Redirect,Link} from 'react-router-dom';

import Posts from './Posts'
import Favourites from './Favourites';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
	<div className="btns">
	<Link to="/page1"><button className="page1" >PAGE1</button></Link>
	<Link to="/page2"><button className="page2">PAGE2</button></Link>
	</div>

     <Switch>
     <Route path="/page1"> <Posts/></Route>
     <Route path="/page2"><Favourites/></Route>
     <Redirect to="/page1"/>
    </Switch>
	
    </div>
  </BrowserRouter>
  );
}

export default App;
