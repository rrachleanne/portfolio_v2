import React from 'react'
import './KeyboardWarrior.css'
import {Link } from 'react-router-dom'
import {Button} from '../../Button'

function KeyboardWarrior() {
    return (
        <div className='keyboardwarrior-container'>
        <video src="/videos/lines-2.mp4" autoPlay loop muted />
       
       <img src="/images/keyboardwarrior/keyboardwarrior.jpg"  />
           <div className="keyboardwarrior-intro">
               <h1>Keyboard Warrior App</h1>
                <div className='keyboardwarrior-underline'></div>
                   <p className='keyboardwarrior-sub-heading'>A Coder Academy 2 day Hackathon v1</p>
               <div className='keyboardwarrior-bio'>
                   <p>The Keyboard Warrior application is an online game that allows users to play a 'Dance Dance Revolution' game in the comfort of their own home using the up, down, left and right keys on any keyboard!</p>
                   <p>Features:</p>
                   <ul id='keyboardwarrior-list'>
                   <li>- New Game </li>
                   <li>- Score </li>
                   <li>- Dashboard </li>
                   
               </ul>
               <p>Tech Stack:</p>
                   <ul id='keyboardwarrior-list'>
               
                   <li>Front-end: HTML5, CSS3 and JavaScript</li>
                   <li>Back-end: Express</li>
                   <li>DevOps: Git and Visual Studio Code</li>
               </ul>

               
           </div>
           <div className="keyboardwarrior-btns">
           
               <Link to='https://github.com/rrachleanne/Hackathon' target="_blank" ><Button 
               className='btns' 
               buttonStyle='btn--dark'
               buttonSize='btn--sml'>
                   GitHub Repo
               </Button>
               </Link>
               <Link to="/portfolio" className='back-arrow'>
           <i class="fas fa-arrow-circle-left"> back</i></Link>
               </div>
           </div>
           
           
           
   </div>
    )
}

export default KeyboardWarrior
