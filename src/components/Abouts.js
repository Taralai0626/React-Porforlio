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
            <HomeStyle>
                <div className="portraitWrapper">
                    <img id="portrait" alt="a portrait of Tara Lai"src={abouts.image}/>
                </div>
                <p>{abouts.content}</p>
            </HomeStyle>
            ))}
        </div>
    )
}
export default Abouts;