import React from 'react'
import './Parqueen.css'
import {Link } from 'react-router-dom'
import {Button} from '../../Button'

function ParQueen() {
    return (
        <div className='parqueen-container'>
        <video src="/videos/lines-2.mp4" autoPlay loop muted />
       
       <img src="/images/parqueen/parqueenhm.jpg"  />
           <div className="parqueen-intro">
               <h1>ParQueen Application</h1>
                <div className='parqueen-underline'></div>
                   <p className='parqueen-sub-heading'>A Coder Academy Assignment by Rachel Williams 2020</p>
               <div className='parqueen-bio'>
                   <p>The ParQueen application was built to allow users to sell a car spot or look for a new one. No longer do people have to wait for periods of time when looking for a carspot, whether it be a regular visit to the shopping centre, a monday to friday commute to the city for your staff, consistent travelling to the airport or your favourite beach in summer. ParQueen can help you save time and money by providing you with an easy and convenient method for searching or selling your carspot.</p>
                   <p>Features:</p>
                   <ul id='parqueen-list'>
                   <li>Secure login, </li>
                   <li> Profile, </li>
                   <li> Dashboard Analytics, </li>
                   <li> Search, </li>
                   <li> Image control, </li>
                   <li> Google Maps Integration, </li>
                   <li> AWS Data Storage, </li>
                   <li> Stripe Integration</li>
               </ul>
               <p>Tech Stack:</p>
                   <ul id='parqueen-list'>
               
                   <li>Front-end: HTML5, CSS3, SCSS, Bootstrap and JavaScript</li>
                   <li>Back-end: ProgreSQL, Ruby 2.7.1 and Ruby on Rails 6.0.3.2</li>
                   <li>DevOps: Git, Visual Studio Code and Heroku</li>
                   <li>API's: Google Geocoding API, Stripe API and AWS S3 API</li>
               </ul>

               
           </div>
           <div className="parqueen-btns">
           <Link to='https://parqueenaustralia.herokuapp.com/' target="_blank" ><Button 
               className='btns' 
               buttonStyle='btn--dark'
               buttonSize='btn--sml'>
                   Live Site
               </Button>
               </Link>
               <Link to='https://github.com/rrachleanne/ParQueen_MarketPlace' target="_blank" ><Button 
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

export default ParQueen
