import React from 'react'

import SkillBar from 'react-skillbars'

const skills =[
    {
        "type": "CSS",
        "level": 80
      },
      {
        "type": "HTML",
        "level": 80
      },
      {
        "type": "JavaScript",
        "level": 70
      },
      {
        "type": "React",
        "level": 75
      },
      {
        "type": "Ruby/Rails",
        "level": 50
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

