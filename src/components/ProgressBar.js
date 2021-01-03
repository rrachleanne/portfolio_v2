import React from 'react'

import SkillBar from 'react-skillbars'

const skills =[
    {
        "type": "CSS",
        "level": 75
      },
      {
        "type": "Git",
        "level": 80
      },
      {
        "type": "HTML",
        "level": 70
      },
      {
        "type": "JavaScript",
        "level": 60
      }, 
      {
        "type": "MongoDB",
        "level": 20
      }
      ,
      {
        "type": "Node.js",
        "level": 40
      },
      {
        "type": "React",
        "level": 65
      },
      {
        "type": "Ruby/Rails",
        "level": 40
      }
    ]
const colors = {
    "bar": "#60b8b0",
    "title": {
      "text": "#fff",
      "background": "#60b8b0"
    }
  }
    


function ProgressBar() {
    return (
        <div>
           <SkillBar skills={skills} colors={colors} height={20}/>
        </div>
    )
}

export default ProgressBar

