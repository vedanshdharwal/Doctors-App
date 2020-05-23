import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link, 
} from 'react-router-dom';

import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
      
      <Router>

        <Route path="/logout">
            <Logout />
        </Route> 
        

        <Route path="/login"
        render={props =>(
          <Login {...props} />
        )}
        >
        </Route> 
   
          <Protected exact path="/" component={Home} />
          <Protected exact path="/details" component={RestaurantDetail} />
          <Protected exact path="/update/:id" component={RestaurantUpdate} />
          <Protected exact path="/create" component={RestaurantCreate} />
          <Protected exact path="/list" component={RestaurantList} />
          <Protected exact path="/search" component={RestaurantSearch} />

      </Router>

    </div>
  );
}

export default App;
