import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1> Featured Items</h1>
            <div className="cards__container">
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

