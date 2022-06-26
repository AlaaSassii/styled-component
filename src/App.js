import React , {useState} from "react";
import { ButtonToggle, ChangeButton, Container, Header, ImageLogo, Navbar, NavbarBody, NavbarHead, NavbarLinks, ReactImage } from "./components/Styles";
import { AiOutlineMenu } from 'react-icons/ai';
function App() {
  const [defaultColor ,setColor] = useState(true)
  const LightBackgroundColor = '#F8F8F8'
  const DarkBackgroundColor = '#000' 
  const LightColor = "#fff"
  const DarkColor="#000"
  return (
    <>
    <Navbar >
      <NavbarHead LightBackgroundColor={LightBackgroundColor} DarkBackgroundColor={DarkBackgroundColor}  defaultColor={defaultColor} >
        <ImageLogo src={`https://avatars.githubusercontent.com/u/9919?s=280&v=4`}/> 
        <ButtonToggle>
          <AiOutlineMenu/>
        </ButtonToggle> 
      </NavbarHead>

      <NavbarBody>
        <NavbarLinks>Home</NavbarLinks>
        <NavbarLinks>about us</NavbarLinks>
        <NavbarLinks>blog</NavbarLinks>
        <NavbarLinks>contact us</NavbarLinks>
      </NavbarBody>
    </Navbar>
    <Container>
      <ReactImage src="http://learnstuff.io/img/svg/react.svg"/>
      <Header>Made by Styled components</Header>
    </Container>
    <ChangeButton>change</ChangeButton>
    </>
  );
}

export default App;
