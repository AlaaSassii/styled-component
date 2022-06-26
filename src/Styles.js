import styled from "styled-components";
import { keyframes } from "styled-components";

// animations 
const size = keyframes`
 50% { font-size: 60px }
 100% { font-size: 30px }
 
`
const rotation = keyframes`
 50%{transform: rotate(180deg);}
 100%{transform:rotate(360deg)}
`
export const Body = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color:${props => props.defaultColor ? '#F8F8F8' : '#000'} ;
    padding:0 ; 
    margin: 0 ; 
`
export const ButtonNav = styled.button`
    position: absolute;
    top:0 ; 
    left: 0 ; 
    z-index: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color:${props => props.defaultColor ? '#000' : '#fff'} ; 
    font-size: 30px;
    animation-name: ${size};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    border:none ; 
`

export const Navbar = styled.nav`
    position: fixed;
    top: 0 ; 
    left: ${props => props.toggle ? '0' :  '-250px'};
    background-color:${props => props.defaultColor ? '#000' : '#F8F8F8'}; 
    width: 250px;
    height: 100vh;
    transition: 0.3s;
    z-index:2 ;
`
export const NavbarHead = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`
export const ImageLogo = styled.img`
    width : 50px ; 
    height: 50px ;
    border-radius: 50%;
    
    `

export const ButtonToggle = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color:${props => props.defaultColor ? '#fff' : '#000'} ; 
    font-size: 30px;
    animation-name: ${size};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    border:none ; 
`

export const NavbarBody  = styled.ul`
    list-style: none;
    color : ${props => props.defaultColor ? '#fff' : '#000'} ; 
    margin: 20px ;  
    font-size: 23px;
    
`

export const NavbarLinks = styled.li`
    margin-top: 10px;
    text-transform: capitalize;
    cursor: pointer;
    padding:20px ; 
`

export const Container = styled.div`
    position: absolute;
    top:30% ; 
    left:45% ; 
    width :500px ;
    text-align: center;

`

export const ReactImage = styled.img `
    width: 300px;
    height: 200px;
    border-radius: 50%;
    animation-name: ${rotation};
    animation-duration: 5s;
    animation-iteration-count: infinite;
`

export const Header = styled.h2`
margin-top: 30px;
    font-size: 64px;
    color:${props => props.defaultColor ? '#000' : '#fff'}  ; 
`
export const ChangeButton = styled.button`
    font-size: 30px;
    background-color:${props => props.defaultColor ? '#000' : '#fff'};
    color:${props => props.defaultColor ? '#fff' : '#000'}; 
    position: absolute;
    top: 10px ; 
    right: 10px ; 
`