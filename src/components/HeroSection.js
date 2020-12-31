import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-5.mp4" autoPlay loop muted />
            <h1>Header Here</h1>
            <p>stuff to be entered here</p>
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
    )
}

export default HeroSection
