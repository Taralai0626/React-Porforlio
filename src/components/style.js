import styled from "styled-components"



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
  font-size: 20px;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  margin-top: auto;
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
    color: white;
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
    font-family: 'Yanone Kaffeesatz', sans-serif;
  }

  li {
    list-style: none;
    display: inline-block;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 30px;
  }

  a {
    color: white;
    text-decoration: none;
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
@import url('https://fonts.googleapis.com/css2?family=Irish+Grover&family=Monoton&display=swap');
  display: flex;
  justify-content: center;
  margin: 0 4em;
  width: 90%;
  text-align: center;

  p{
    font-size: 72px;
    color: white;
    width: 80%;
    padding-right: 1em;
    font-family: 'Irish Grover', cursive;
  }

  img{
    /* margin-top: 0; */
    width: 60%;
  }

  .portraitWrapper{
    width:40%;
  }
`

/////////////// STYLE FOR SKILL PAGE/////////////////
export const SkillStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Irish+Grover&family=Monoton&display=swap');
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'Irish Grover', cursive;
  width: 100%;
  align-content: center;
  /* vertical-align: middle; */
  
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
`

/////////////// STYLE FOR PROJECT PAGE /////////////////
export const ProjectStyle = styled.div`
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
  font-family: 'Irish Grover', cursive;

}
`

/////////////// STYLE FOR EDUCATION PAGE /////////////////
export const EducationStyle = styled.div`
  color: white;
  font-family: 'Irish Grover', cursive;
  font-size: 20px;
  background-color: rgba(	129,	208,	147, 0.2);
  border-radius:50px;
  margin: 0 4em;
  padding: 10px 0;

  .eduWrapper{
    padding: 0 4em;
  }
`