import React from 'react';
import ProfileLinks from "../components/ProfileLinks";
// import { FooterStyle } from "../components/style";


// const Footer = () =>{
//   const [profileLinks, setProfileLinks] = useState([]);
//   useEffect(()=>{
//   axios.get('https://laravel-tara.herokuapp.com/api/profileLinks')
//   .then(response => {
//       setProfileLinks(response.data)
//   })
// })
// return (
  // <div>
  //     <div>&copy; Tara Lai, 2022.</div> 
  //     {profileLinks.map(profileLinks=> (  
  //      <FooterStyle id="footer">
  //       <ul>
  //           <li>
  //               <a href={profileLinks.url}>
  //                   <img id="temp" alt="describ" width="50px"src={profileLinks.image}/>
  //                   <span>{profileLinks.name}</span>
  //               </a>
  //           </li>
  //       </ul>
  //     </FooterStyle> 
  //     ))}
  // </div>
// )}
// export default Footer;

function Footer() {
  return(
    <footer id="footer">
      <div>&copy; Tara Lai, 2022.</div>
      <ProfileLinks/>
    </footer>  
  )
}
export default Footer;