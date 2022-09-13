import React from "react";
import Educations from "../components/Educations"
import { EducationStyle } from "../components/style";



function Education() {
  return(
    <main id="main">
      <EducationStyle className="card-wrapper">
        <Educations/>
      </EducationStyle>
    </main>
  )
}
export default Education;