import React from 'react'
import './Checkmate.css'
import {Link } from 'react-router-dom'
import {Button} from '../../Button'

function Checkmate() {
    return (
        <div className='checkmate-container'>
        <video src="/videos/lines-2.mp4" autoPlay loop muted />
       
       <img src="/images/checkmate/checkmate.jpg"  />
           <div className="checkmate-intro">
               <h1>Checkmate Application</h1>
                <div className='checkmate-underline'></div>
                   <p className='checkmate-sub-heading'>A Coder Academy 2 day Hackathon</p>
               <div className='checkmate-bio'>
                   <p>The Checkmate online application allows users to create to-do lists for any occasion, whether it be personal or business related. To-do lists help people and businesses to be more organised when trying to reach a goal. A list can make everything more manageable as people can see a clear outline of the completed and uncompleted tasks. Thus keeping individuals and businesses mentally focused.</p>
                   <p>Features:</p>
                   <ul id='checkmate-list'>
                   <li>Secure login, </li>
                   <li> Profile, </li>
                   <li> Dashboard, </li>
                   <li> To-do list form, </li>
                   <li> Edit, </li>
                   <li> Delete, </li>
                   <li> Update, </li>
               </ul>
               <p>Tech Stack:</p>
                   <ul id='checkmate-list'>
               
                   <li>Front-end: HTML5, CSS3, React/JS and Bootstrap</li>
                   <li>Back-end: Express and MongoDB</li>
                   <li>DevOps: Git, Visual Studio Code and Heroku</li>
               </ul>

               
           </div>
           <div className="checkmate-btns">
           <Link to='https://checkmate-tasks.herokuapp.com/' target="_blank" ><Button 
               className='btns' 
               buttonStyle='btn--dark'
               buttonSize='btn--sml'>
                   Live Site
               </Button>
               </Link>
               <Link to='https://github.com/rrachleanne/checkmate' target="_blank" ><Button 
               className='btns' 
               buttonStyle='btn--dark'
               buttonSize='btn--sml'>
                   GitHub Repo
               </Button>
               </Link>
               </div>
           </div>
           
           
           
   </div>
    )
}

export default Checkmate
