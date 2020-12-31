import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/walking-1.mp4" autoPlay loop muted />
        <div className="slider">
            <h1>Hi, i'm Rachel Williams!</h1>
            <h2>A Junior Full Stack Developer</h2>

          
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Button Name 1
                </Button>

                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Button Name 2
                </Button>
            </div>
            </div>
        </div>
    )
}

export default HeroSection
