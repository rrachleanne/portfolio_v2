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
        <i class="fab fa-css3-alt fa-xs"></i><i class="fab fa-html5 fa-xs"></i><i class="fab fa-js-square fa-xs"></i><i class="fab fa-react fa-xs"></i><i class="fab fa-node fa-xs"></i><i class="fab fa-git-alt fa-xs"></i><img src='/images/ruby.png'></img><img src='/images/mongodb.png'></img>
        </div>
        <div className='other-skills'>
            Leadership  <i class="fas fa-circle fa-xs"></i>  8 years Management  <i class="fas fa-circle fa-xs"></i>  Cloud Computing  <i class="fas fa-circle fa-xs"></i>  Training Software Documentation  <i class="fas fa-circle fa-xs"></i>  Business Planning/Strategy  <i class="fas fa-circle fa-xs"></i>  Customer Relationship Management  <i class="fas fa-circle fa-xs"></i>  Sales and Marketing
        </div>

         </div>
        </div>
    )
}

export default Skills
