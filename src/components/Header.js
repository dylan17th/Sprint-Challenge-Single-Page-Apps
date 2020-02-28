import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import './header.css'

const NavHeader = styled.header`
display:flex;
justify-content: space-around;
color: purple;
align-items: baseline;
text-shadow: -1px -1px 0 #000, 1px 1px 0 #000, 0 -1px 0 #000,
	0 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 0 0 #000,
    -1px 0 0 #000;
font-size: 1.5rem;
letter-spacing:.09rem;
`
const LinkDiv = styled.div`
border: black solid 2px;
box-shadow: 1px 1px 1px 1px black;
padding:1rem 2rem;
border-radius: 10px;
background-color: purple;
&:hover{
transform: scale(1.1);
transition: .5s;
}
`


export default function Header() {
  return (
    <NavHeader>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <LinkDiv><Link className='links' to='/'>Home</Link></LinkDiv>
      <LinkDiv><Link className='links' to='/character-list'>Characters List</Link></LinkDiv>
    </NavHeader>
  );
}
