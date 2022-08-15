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
    <FooterLinkStyle>
        {profileLinks.map(profileLinks=> (    
        <ul>
            <li>
                <a href={profileLinks.url}>
                    <img id="temp" alt="describ" width="50px"src={profileLinks.image}/>
                    <span>{profileLinks.name}</span>
                </a>
            </li>
        </ul>
        ))}
    </FooterLinkStyle>
)}
export default ProfileLinks;