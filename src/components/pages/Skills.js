import React from 'react'
import './Skills.css'
import ProgressBar from '../ProgressBar'



function Skills() {
    return (
        <div className='skills-container'>
            <h1>Skills</h1>   
            <div className='skills-underline'></div>     
            <div className='skills-box'>
        <ProgressBar/>
        <div className='icons'>
        <i class="fab fa-css3-alt"></i> <i class="fab fa-html5"></i> <i class="fab fa-js-square"></i> <i class="fab fa-react"></i> <img src='/images/ruby.png'></img>
        </div>
        
        <ul id='skills-list'>
            <li>
            React
            </li>
            <li>
            Ruby on Rails
            </li>
            <li>
            Node
            </li>
            <li>
            MongoDB
            </li>
            <li>
            Express
            </li>
            <li>
            Git
            </li>
        
        </ul>
         </div>
        </div>
    )
}

export default Skills
