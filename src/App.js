import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component= {Home}/>
          <Route path='/portfolio' exact component= {Portfolio}/>
          <Route path='/about' exact component= {About}/>
          <Route path='/contact' exact component= {Contact}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
