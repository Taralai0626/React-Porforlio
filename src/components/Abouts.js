// import axios from "axios";
// import React, {useState, useEffect} from 'react';
import React from 'react';
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
        <>
            {aboutData.map(aboutData=> (
            <HomeStyle className="home-style">
                <div className="portraitWrapper">
                    <img id="portrait1" src={aboutData.image}  alt="a portrait of Tara Lai"/>
                    <div className="portrait2"></div>
                </div>
                <div className="title-container">
                    <h1 className="title">
                        Hello! <br />
                        My name is Tara! <br />
                        I am a 
                        <div className="rotate-words">
                            <span className="title-card1">Web developer.</span>
                            <span className="title-card2">team player.</span>
                            <span className="title-card3">concert enthusiast.</span>
                        </div>
                    </h1>
                    <h2><span className="about-deco"></span> A bit about me</h2>
                    <p>{aboutData.content}</p>
                </div>
            </HomeStyle>
            ))}
        </>
    )
}
export default Abouts;