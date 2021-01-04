import React from 'react'
import CardItem from '../CardItem'
import './Portfolio.css'
import { Link } from 'react-router-dom';
import { Button } from '../Button'

function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
            <h1>The Professional Behind the Desk</h1>
            <div className='portfolio-underline'></div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <CardItem
                       src='images/parqueen/fullscreen.jpg' text='ParQueen App' label='Ruby on Rails' path='/parqueen'
                       /> 
                        <CardItem
                       src='images/checkmate/checkmate.jpg' text='CheckMate App' label='React/JS' path='/checkmate'
                       />
                       <CardItem
                       src='images/keyboardwarrior/keyboardwarrior.jpg' text='Keyboard Warrior' label='JavaScript' path='/keyboardwarrior'
                       />
                                       
                    </ul>
                    <ul className="cards__items">
                       <CardItem
                       src='images/html/htmlsite.jpg' text='V1.Portfolio' label='Html/Css' path='/html-portfolio'
                       />
                        <CardItem
                       src='/images/v2portfolio/portfolio.jpg' text='V2.Portfolio' label='React/JS' path='/portfolio'
                       />
                        <CardItem
                       src='images/ruby/kellypool.png' text='Kellypool' label='Ruby' path='/portfolio'
                       />                   
                    </ul>
                </div>
            <div className='github'>
            <Link to='https://github.com/rrachleanne' target="_blank"><Button 
                className='btns' 
                buttonStyle='btn--dark'
                buttonSize='btn--sml'>
                    More on GitHub!
                </Button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Cards
