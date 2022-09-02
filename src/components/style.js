import styled from "styled-components"
// import { device } from './device';


/////////////// STYLE FOR FOOTER /////////////////
export const FooterStyle = styled.footer`
  @import url('https://fonts.googleapis.com/css2?family=Irish+Grover&family=Monoton&family=Yanone+Kaffeesatz:wght@600&display=swap');
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 90%;
  margin-left: 4em;
  color: white;
  font-size: 22px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  margin-top: auto;

  @media (max-width: 960px) {
    /* .footer-name{
      display: none;
    } */
  }
`;

export const FooterLinkStyle = styled.div`
  display: inline-flex;

  img {
    vertical-align: middle;
  }

  li{
    list-style-type: none;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }

  
`;

/////////////// STYLE FOR NAVBAR /////////////////
export const NavHeaderStyle = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Irish+Grover&family=Monoton&family=Yanone+Kaffeesatz:wght@600&display=swap');
  display:flex;
  position:relative;
  align-items: center;
  justify-content: space-between;
  margin: 0 4em;
  color: white;

  h2 {
    font-size: 48px;
    font-family: 'Irish Grover', cursive; 
  }

  li {
    list-style: none;
    display: inline-block;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 30px;
  }

  li:after{
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.5s ease, background-color 0.5s ease;
  }

  li:hover:after{
    width:100%;
    background: #ffdd40;
  }

  li .active{
    color: rgb(	129,	208,	147);
    /* border: 1px solid #ffdd40; */
  }

  a {
    color: white;
    text-decoration: none;
  }

  .nav-icon {
    display: none;
  }

  @media (max-width: 960px) {
    .nav-menu {
      display: flex;
      padding: 0 0.5em;
      flex-direction: column;
      text-align: center;
      width: 100%;
      /* border-top: 1px solid #fff; */
      position: absolute;
      top: 78px; /* the gap between menu and links */
      left: -110%;
      opacity: 0.5;
      background: #8BA891
    }

    .nav-menu.active{
     
      left: -16px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
      margin: 0;
    }

    .nav-links {
      padding: 0;
      width: 100%;
      display: table;
      /* background: #2E5B36 */;
    }
  /*   .nav-links2{
      padding: 0;
      width: 100%;
      display: table;
      background: #ffdd40;
    } */
    li {
     /*  padding-left:0; */
     padding: 10px 0;

    }
    .nav-icon {
      display: block;
      position: absolute;
      top: 5%;
      right:0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #ffdd40
    }
  }
/*  #check,label #btn,
label #cancel {
  color: #05E5EA;
  font-size: 30px;
  float: right;
  top:5px;
  left: 80vw;
  cursor: pointer;
  display: block;
  position:absolute;
}
@media screen and (max-width:810px){
  label #btn {
    display: block;
  }
  #check:checked ~ .menu {
    left: 0;
  }

  #check:checked ~ label #btn {
    display: none;
  }

  #check:checked ~ label #cancel {
    display: block;
  } 
}*/
`;

export const NavList = styled.li`
  display:inline-flex;
  justify-content: space-between;
  position:relative;
  padding: 1em;
  margin-left: 0;
  font-size: 18pt;
`;

/////////////// STYLE FOR HOME PAGE /////////////////
export const HomeStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Fjalla+One&family=Irish+Grover&family=Monoton&family=Shadows+Into+Light&family=Yanone+Kaffeesatz:wght@600&display=swap');
  display: flex;
  justify-content: center;
  margin: 0 4em;
  width: 90%;
  text-align: center;

  /* p{
    font-size: 22px;
    color: white;
    width: 80%; /* no need */
    /* padding-right: 1em;
    font-family: 'Bree Serif', serif; */
  /* } */ 

  img{
    /* margin-top: 0; */
    width: 60%;
  }

  .portraitWrapper{
    width:100%;
    margin: 0 4em;
  }

  @media (max-width: 960px) {
    p{
    font-size: 26px;
    color: #2E5B36;
    width: 80%;
    padding-right: 2em;
    font-family: 'Bree Serif', serif;
  }
    .portraitWrapper img{
      display: none;
    }

  }
`

/////////////// STYLE FOR SKILL PAGE/////////////////
export const SkillStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Irish+Grover&family=Monoton&family=Yanone+Kaffeesatz:wght@600&display=swap');
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  width: 100%;
  align-content: center;
  /* vertical-align: middle; */
  @media (max-width: 960px) {
    .skill-container img{
      width: 50px;
      margin: 0;
    }
  }
`

export const SkillWrapStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 2em;
  justify-content: center;
  align-items : center;
  height: 70vh;
  vertical-align: center;


  h1{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  }

  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: auto auto auto auto; 
    height: 50vh;
    gap:8px;
    margin: 2em 0;
    padding-bottom: 5em;
  }
`

/////////////// STYLE FOR PROJECT PAGE /////////////////
export const ProjectStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Irish+Grover&family=Monoton&family=Shadows+Into+Light&family=Yanone+Kaffeesatz:wght@600&display=swap');
color: white;
margin: auto 3em;
padding: 2em 2em;

img{
  width: 100%;
  border-radius: 20px;
  margin-top: 1.5em;
}

.img-wrapper{
  width: 50%;
}

.project-wrapper{
  display: flex;
  flex-direction: row;
  gap: 3em;
}

.content-wrapper{
  width: 50%;
  font-size: 24px;
  font-family: 'Fjalla One', sans-serif;
}

@media (max-width: 960px) {
  margin:1em;
  padding: 1em;

  .project-wrapper{
  display: flex;
  flex-direction: column;
  gap: 1em;
}

  .content-wrapper{
    font-size: 20px;
    width: 100%;
}
  .img-wrapper{
  width: 100%;
}
  h1{
    text-align: center;
    font-size: 26px;
    margin-bottom: 0;
  }
}
`

/////////////// STYLE FOR EDUCATION PAGE /////////////////
export const EducationStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Irish+Grover&family=Monoton&family=Shadows+Into+Light&family=Yanone+Kaffeesatz:wght@600&display=swap');
  color: white;
  font-family: 'Fjalla One', sans-serif;
  font-size: 20px;
  background-color: rgba(	129,	208,	147, 0.6);
  border-radius:50px;
  margin: 0 4em;
  padding: 10px 0;

  .eduWrapper{
    padding: 0 4em;
  }

  p{
    font-size: 22px;
    font-weight: bold;
  }

  @media (max-width: 960px) {
    margin: 1em 1em;
    font-size: 12px;
    padding: 6px auto;
  }

  p{
    font-size: 18px;
    font-weight: bold;
  }
`