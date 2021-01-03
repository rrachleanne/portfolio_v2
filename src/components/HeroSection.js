import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Animation from './Animation'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/walking-1.mp4" autoPlay loop muted />
        <div className="slider">
            <h1>Hello!</h1>
            <h2>I'm Rachel Williams</h2>
            <Animation/>
           

          
            <div className="hero-btns">
               <Link to='/portfolio'><Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    View Portfolio
                </Button>
                </Link> 

              <Link to='/contact'><Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Let's Connect
                </Button>
                </Link>
               
            </div>
            
            </div>
            
        </div>
       
    )
}

export default HeroSection
