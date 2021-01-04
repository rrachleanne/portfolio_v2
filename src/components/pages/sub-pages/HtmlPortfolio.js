import React from 'react'
import './HtmlPortfolio.css'
import {Link } from 'react-router-dom'
import {Button} from '../../Button'

function HtmlPortfolio() {
    return (
        <div className='html-portfolio-container'>
        <video src="/videos/lines-2.mp4" autoPlay loop muted />
       
       <img src="/images/checkmate/checkmate.jpg"  />
           <div className="checkmate-intro">
               <h1>HTML Portfolio V1</h1>
                <div className='html-portfolio-underline'></div>
                   <p className='html-portfolio-sub-heading'>A Coder Academy Assignment</p>
               <div className='html-portfolio-bio'>
                   <p>This website was designed to be a version 1 HTML and CSS portfolio based on the Coder Academy Assignment requirements. Skills obtained through out the course were used to develop the site from scratch and deploy on a URL.</p>
                   <p>Features:</p>
                   <ul id='html-portfolio-list'>
                   <li>Hamburger menu, </li>
                   <li> Resume Link, </li>
                   <li> Social Media Links, </li>
                   <li> About Page,  </li>
                   <li> Career Page,  </li>
                   <li> Blog Page,  </li>
                   <li> Portfolio Page </li>
                 
               </ul>
               <p>Tech Stack:</p>
                   <ul id='html-portfolio-list'>
               
                   <li>Front-end: HTML5, CSS3</li>
                   <li>DevOps: Git, Visual Studio Code and GoDaddy Deployment</li>
               </ul>

               
           </div>
           <div className="html-portfolio-btns">
           <Link to='http://www.girlqode.com/' target="_blank" ><Button 
               className='btns' 
               buttonStyle='btn--dark'
               buttonSize='btn--sml'>
                   Live Site
               </Button>
               </Link>
               <Link to='https://github.com/rrachleanne/Website-Portfolio' target="_blank" ><Button 
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

export default HtmlPortfolio
