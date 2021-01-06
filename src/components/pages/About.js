import React from 'react';
import './About.css'
import { Link } from 'react-router-dom';
import { Button } from '../Button'


export default function About() {
    return (
        
    <div className='about-container'>
         <video src="/videos/lines-2.mp4" autoPlay loop muted />
        
        <img src="/images/profile.jpg"  />
            <div className="intro">
                <h1>The Girl Behind the Laptop</h1>
                 <div className='about-underline'></div>
                    <p className='sub-heading'>Sydney, NSW Australia</p>
                <div className='about-bio'>
                    <p>With over 10 years' experience delivering technology solutions and team management, i am passionate about:</p>
                    <ul id='about-list'>
                <i class="far fa-dot-circle"></i><li>- Technology</li>
                    <li>- Coding</li>
                    <li>- User Experience</li>
                    <li>- Design</li>
                    <li>- Strategy</li>
                    <li>- Leadership</li>
                </ul>

                <p>In 2020 i decided to take the plunge and become a full stack developer by completing my Diploma in IT at Coder Academy.</p>
                <p>Once graduated, I hope to become a Junior Developer focusing on JavaScript and React so I can further build on my skills.</p>
            </div>
            <div className="about-btns">
            <Link to='/images/resume.pdf' target="_blank" download><Button 
                className='btns' 
                buttonStyle='btn--dark'
                buttonSize='btn--sml'>
                    Resume
                </Button>
               </Link>
               <Link to='/contact' ><Button 
               className='btns' 
               buttonStyle='btn--dark'
               buttonSize='btn--sml'>
                   Contact
               </Button>
               </Link>
                </div>
            </div>
            
            

    </div>

            
         
    )
}