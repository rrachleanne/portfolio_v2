import React from 'react'
import './ReactPortfolio.css'
import {Link } from 'react-router-dom'
import {Button} from '../../Button'

function ReactPortfolio() {
    return (
        <div className='react-portfolio-container'>
        <video src="/videos/lines-2.mp4" autoPlay loop muted />
       
       <img src="/images/v2portfolio/portfolio.jpg"  />
           <div className="react-portfolio-intro">
               <h1>React Portfolio V2</h1>
                <div className='react-portfolio-underline'></div>
                   <p className='react-portfolio-sub-heading'>Side Project by Rachel WIlliams 2021</p>
               <div className='react-portfolio-bio'>
                   <p>This website was a side project to re-write my HTML portfolio in React/JS in preparation for graduating.</p>
                   <p>Features:</p>
                   <ul id='react-portfolio-list'>
                   <li>Hamburger menu, </li>
                   <li> Animations, </li>
                   <li> Social Media Links, </li>
                   <li> Resume Download,  </li>
                   <li> Contact Form,  </li>
                   <li> Skills Animated Section,  </li>
                   <li> Portfolio Page </li>
                 
               </ul>
               <p>Tech Stack:</p>
                   <ul id='react-portfolio-list'>
               
                   <li>Front-end: HTML5, CSS3, React/JS</li>
                   <li>DevOps: Git, Visual Studio Code and GoDaddy Deployment</li>
               </ul>

               
           </div>
           <div className="react-portfolio-btns">
           <Link to='http://www.rachelleannewilliams.com/' target="_blank" ><Button 
               className='btns' 
               buttonStyle='btn--dark'
               buttonSize='btn--sml'>
                   Live Site
               </Button>
               </Link>
               <Link to='https://github.com/rrachleanne/portfolio_v2' target="_blank" ><Button 
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

export default ReactPortfolio
