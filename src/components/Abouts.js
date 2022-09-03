import axios from "axios";
import React, {useState, useEffect} from 'react';
import { HomeStyle } from "../components/style";

const Abouts = () =>{
    const [abouts, setAbouts] = useState([]);
    useEffect(()=>{
        axios.get('./aboutsData.json')
        .then(response => {
            setAbouts(response.data)
        })
    })
    return (
        <div>
            {abouts.map(about=> (
            <HomeStyle className="home-style">
                <div className="portraitWrapper">
                    <img id="portrait1" src="http://mhno.great-site.net/images/portrait.png" alt="a portrait of Tara Lai"/>
                    {/* <img id="portrait2" alt="a portrait of Tara Lai"src="./img/IMG_3057.jpg"/> */}
                </div>
                <div className="portrait2"></div>
                <p>{about.content}</p>
            </HomeStyle>
            ))}
        </div>
    )
}
export default Abouts;