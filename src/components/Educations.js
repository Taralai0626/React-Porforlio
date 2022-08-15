import axios from "axios";
import React, {useState, useEffect} from 'react';
// import { EducationStyle } from "../components/style";

const Educations = () =>{
  const [educations, setEducations] = useState([]);
  useEffect(()=>{
      axios.get('https://laravel-tara.herokuapp.com/api/educations')
      .then(response => {
        setEducations(response.data)
      })
  })
  return (
      <div>
          {educations.map(educations=> (
          <div className="eduWrapper">
              <h1>{educations.institution_name}</h1>
              <p>{educations.course_name}</p>
              <p>Enrolled date: {educations.date}</p>
          </div>
          ))}
      </div>
  )
}


export default Educations;