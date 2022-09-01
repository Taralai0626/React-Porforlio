import axios from "axios";
import React, {useState, useEffect} from 'react';
import { HomeStyle } from "../components/style";

const Abouts = () =>{
    const [abouts, setAbouts] = useState([]);
    useEffect(()=>{
        axios.get('https://laravel-tara.herokuapp.com/api/abouts')
        .then(response => {
            setAbouts(response.data)
        })
    })
    return (
        <div>
            {abouts.map(abouts=> (
            <HomeStyle className="home-style">
                <div className="portraitWrapper">
                    <img id="portrait1" alt="a portrait of Tara Lai"src={abouts.image}/>
                    {/* <img id="portrait2" alt="a portrait of Tara Lai"src="./img/IMG_3057.jpg"/> */}
                </div>
                <div className="portrait2"></div>
                <p>{abouts.content}</p>
            </HomeStyle>
            ))}
        </div>
    )
}
export default Abouts;