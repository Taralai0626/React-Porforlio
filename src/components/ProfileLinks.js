import axios from "axios";
import React, {useState, useEffect} from 'react';
import { FooterLinkStyle } from "../components/style";


const ProfileLinks = () =>{
    const [profileLinks, setProfileLinks] = useState([]);
    useEffect(()=>{
    axios.get('https://laravel-tara.herokuapp.com/api/profileLinks')
    .then(response => {
        setProfileLinks(response.data)
    })
})
return (
    <div>
        {profileLinks.map(profileLinks=> (   
        <FooterLinkStyle>  
            <ul>
                <li>
                    <a href={profileLinks.url}>
                        <img id="temp" alt="portrait of Tara Lai" width="50px"src={profileLinks.image}/>
                        <span>{profileLinks.name}</span>
                    </a>
                </li>
            </ul>
        </FooterLinkStyle> 
        ))}
    </div>
)}
export default ProfileLinks;