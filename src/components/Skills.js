import axios from "axios";
import React, {useState, useEffect} from 'react';
import { SkillWrapStyle } from "../components/style";

const Skills = () =>{
  const [skills, setSkills] = useState([]);
  useEffect(()=>{
      axios.get('https://laravel-tara.herokuapp.com/api/skills')
      .then(response => {
          setSkills(response.data)
      })
  })
  return (
      <SkillWrapStyle className="skill-wrapper">
          {skills.map(skills=> (
          <div className="skill-container">       
              <h1><img id="temp" alt="describ" width="100px"src={skills.image}/>{skills.title}</h1>
          </div>
          ))}
      </SkillWrapStyle>
  )
}
export default Skills;