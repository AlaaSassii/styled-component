import React , {useState} from "react";
import { Body, ButtonNav, ButtonToggle, ChangeButton, Container, Header, ImageLogo, Navbar, NavbarBody, NavbarHead, NavbarLinks, ReactImage } from "./Styles";
import { AiOutlineMenu  , AiOutlineClose} from 'react-icons/ai';

function App() {
  const [defaultColor ,setColor] = useState(true)
  const [toggle,setToggle] = useState(true)
  return (
    <Body defaultColor={defaultColor}>
    <Navbar   toggle={toggle} defaultColor={defaultColor} >
      <NavbarHead defaultColor={defaultColor} >
        <ImageLogo  defaultColor={defaultColor}
         src={defaultColor ?  'https://avatars.githubusercontent.com/u/9919?s=280&v=4' : 'https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png'}/>
        
        <ButtonToggle  defaultColor={defaultColor} onClick={()=>setToggle(false)}>
          <AiOutlineClose  />
        </ButtonToggle> 
      </NavbarHead>

      <NavbarBody defaultColor={defaultColor}>
        <NavbarLinks defaultColor={defaultColor}>Home</NavbarLinks>
        <NavbarLinks defaultColor={defaultColor}>about us</NavbarLinks>
        <NavbarLinks defaultColor={defaultColor}>blog</NavbarLinks>
        <NavbarLinks defaultColor={defaultColor}>contact us</NavbarLinks>
      </NavbarBody>
    </Navbar>
    <Container defaultColor={defaultColor}>
      <ReactImage  defaultColor={defaultColor} src={defaultColor ?  'http://learnstuff.io/img/svg/react.svg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6E4xe90HJNx3rCYXx5B66KLoseJ_EaGje2R7iGibcaDlIHmS8QpK4cvIxZrnL7uNKPk&usqp=CAU'}/>
      <Header defaultColor={defaultColor} >Made by Styled components</Header>
    </Container>
    <ChangeButton defaultColor={defaultColor}  onClick={()=>setColor(!defaultColor)} >change</ChangeButton>
    <ButtonNav defaultColor={defaultColor} onClick={()=>setToggle(true) }  > <AiOutlineMenu  /> </ButtonNav>
    </Body>
  );
}
// https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png
// https://avatars.githubusercontent.com/u/9919?s=280&v=4
// https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg
export default App;
