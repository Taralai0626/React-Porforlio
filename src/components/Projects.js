// import axios from "axios";
// import React, {useState, useEffect} from 'react';
import { ProjectStyle } from "../components/style";
import { proData } from "../components/projectData";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from '@chakra-ui/react'
// import { FaEdge , FaMap } from "react-icons/fa"

const Projects = () =>{
    /* const [projects, setProjects] = useState([]);
    useEffect(()=>{
        axios.get('./projectData.json')
        .then(response => {
        setProjects(response.data)
        })
    }) */
    return (
        <div className="project-container">
            {proData.map(proData=> (
            <ProjectStyle>
                <h1>{proData.title}</h1>
                <div className="project-wrapper">  
                    <div className="img-wrapper">
                        <img id="temp" alt="describ"src={proData.image}/>
                        <a className="btn btn-success proButton" href={proData.url} role="button">View Code</a>
                    </div>
                    <div className="content-wrapper">
                        <p>{proData.content}</p>
                    </div>
                </div>
            </ProjectStyle>
            ))}
        </div>
    )
}
export default Projects;