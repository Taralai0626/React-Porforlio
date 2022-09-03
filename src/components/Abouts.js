// import axios from "axios";
// import React, {useState, useEffect} from 'react';
import { HomeStyle } from "../components/style";
import { aboutData } from "../components/aboutsData"

const Abouts = () =>{
 /*    const [abouts, setAbouts] = useState([]);
    useEffect(()=>{
        axios.get('./')
        .then(response => {
            setAbouts(response.data)
        })
    }) */
    return (
        <div>
            {aboutData.map(aboutData=> (
            <HomeStyle className="home-style">
                <div className="portraitWrapper">
                    <img id="portrait1" src={aboutData.image}  alt="a portrait of Tara Lai"/>
                    {/* <img id="portrait2" alt="a portrait of Tara Lai"src="./img/IMG_3057.jpg"/> */}
                </div>
                <div className="portrait2"></div>
                <p>{aboutData.content}</p>
            </HomeStyle>
            ))}
        </div>
    )
}
export default Abouts;