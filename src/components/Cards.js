import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1> CARD TEXT</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <CardItem
                       src='images/img-9.jpg' text='image text' label='label text here' path='/portfolio'
                       />
                        <CardItem
                       src='images/img-2.jpg' text='image text' label='label text here' path='/portfolio'
                       />
                                       
                    </ul>
                    <ul className="cards__items">
                       <CardItem
                       src='images/img-9.jpg' text='image text' label='label text here' path='/portfolio'
                       />
                        <CardItem
                       src='images/img-2.jpg' text='image text' label='label text here' path='/portfolio'
                       />
                        <CardItem
                       src='images/img-3.jpg' text='image text' label='label text here' path='/portfolio'
                       />                   
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

