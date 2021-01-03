import React from 'react'
import CardItem from '../CardItem'
import './Portfolio.css'

function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
            <h1>The Professional Behind the Desk</h1>
            <div className='portfolio-underline'></div>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <CardItem
                       src='images/me.png' text='image text' label='label text here' path='/portfolio'
                       />
                        <CardItem
                       src='images/me.png' text='image text' label='label text here' path='/portfolio'
                       />
                                       
                    </ul>
                    <ul className="cards__items">
                       <CardItem
                       src='images/me.png' text='image text' label='label text here' path='/portfolio'
                       />
                        <CardItem
                       src='images/me.png' text='image text' label='label text here' path='/portfolio'
                       />
                        <CardItem
                       src='images/me.png' text='image text' label='label text here' path='/portfolio'
                       />                   
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
