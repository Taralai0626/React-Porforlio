import axios from "axios";
import React, {useState, useEffect} from 'react';
import { ProjectStyle } from "../components/style";

const Projects = () =>{
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        axios.get('https://laravel-tara.herokuapp.com/api/projects')
        .then(response => {
        setProjects(response.data)
        })
    })
    return (
        <div>
            {projects.map(projects=> (
            <ProjectStyle>
                <h1>{projects.title}</h1>
                <div className="project-wrapper">  
                    <div className="img-wrapper">
                        <a href={projects.url}>
                            <img id="temp" alt="describ"src={projects.image}/>
                        </a>
                    </div>
                    <div className="content-wrapper">
                        <p>{projects.content}</p>
                    </div>
                </div>
            </ProjectStyle>
            ))}
        </div>
    )
}
export default Projects;