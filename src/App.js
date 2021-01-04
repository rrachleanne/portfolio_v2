import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Skills from './components/pages/Skills'
import ParQueen from './components/pages/sub-pages/Parqueen'
import Checkmate from './components/pages/sub-pages/Checkmate'
import KeyboardWarrior from './components/pages/sub-pages/KeyboardWarrior'
import HtmlPortfolio from './components/pages/sub-pages/HtmlPortfolio'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component= {Home}/>
          <Route path='/about' exact component= {About}/>
          <Route path='/portfolio' exact component= {Portfolio}/>
          <Route path='/skills' exact component= {Skills}/>
          <Route path='/contact' exact component= {Contact}/>
          <Route path='/parqueen' exact component= {ParQueen}/>
          <Route path='/checkmate' exact component= {Checkmate}/>
          <Route path='/keyboardwarrior' exact component= {KeyboardWarrior}/>
          <Route path='/html-portfolio' exact component= {HtmlPortfolio}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
