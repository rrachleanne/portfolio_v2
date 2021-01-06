import React from 'react'
import './Kellypool.css'
import {Link } from 'react-router-dom'
import {Button} from '../../Button'

function Kellypool() {
    return (
        <div className='kellypool-container'>
        <video src="/videos/lines-2.mp4" autoPlay loop muted />
       
       <img src="/images/ruby/kellypool.png"  />
           <div className="kellypool-intro">
               <h1>Kellypool Terminal App</h1>
                <div className='kellypool-underline'></div>
                   <p className='kellypool-sub-heading'>A Coder Academy T1 Terminal Assignment</p>
               <div className='kellypool-bio'>
                   <p>The Kelly pool No Generator is not a game. It is an application to help play the game. It eliminates the time consuming task of writing numbers down on a piece of paper and picking from a bowl. The Kelly pool No Generator will allow each player to easily and securely receive a ball number without the other players knowing what ball they have.</p>
                   <p>Features:</p>
                   <ul id='kellypool-list'>
                   <li>- New game </li>
                   <li>- Enter no. of players and names </li>
                   <li>- Randomly allocate numbers </li>
                   <li>- Help </li>
                   
               </ul>
               <p>Tech Stack:</p>
                   <ul id='kellypool-list'>
               
                   <li>Front-end: Ruby Gems</li>
                   <li>Back-end: Ruby</li>
                   <li>DevOps: Git and Visual Studio Code</li>
               </ul>

               
           </div>
           <div className="kellypool-btns">
           
               <Link to='https://github.com/rrachleanne/terminal_app' target="_blank" ><Button 
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

export default Kellypool
