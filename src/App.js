import React, { Component } from 'react'
import './App.css';
import NavBar from './Component/NavBar';
import News from "./Component/News"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// 6edc190cc7234c5b952e96229d3eb7eb ---->API Key

export default class App extends Component {
  render() { 
    return (
     <div>
      <Router >
      <NavBar/>
      <div className="conatiner my-4">
        <h1 className='mx-4'>Top-Headlines:-</h1>
      </div>
      <div className="container text-center mt-4">

      <Switch>
      
       <Route path="/general"><News key="gnal" pageSize={8} country='in' category="general"/></Route> 
      <Route exat path="/business"> <News key="business" pageSize={8} country='in' category="business"/></Route>
      <Route exat path="/entertainment"> <News key="entertainment" pageSize={8} country='in' category="entertainment"/></Route>
      <Route exat path="/health"> <News key="health" pageSize={8} country='in' category="health"/></Route>
      <Route exat path="/science"> <News key="science" pageSize={8} country='in' category="science"/></Route>
      <Route exat path="/general"> <News key="general" pageSize={8} country='in' category='general'/></Route>
      <Route exat path="/sport"> <News key="sport" pageSize={8} country='in' category="sport"/></Route>
      <Route exat path="/technology"><News key="technology" pageSize={8} country='in' category="technology"/></Route>
      </Switch>
  </div>

        </Router>
     </div>
     
    )
  }
}



