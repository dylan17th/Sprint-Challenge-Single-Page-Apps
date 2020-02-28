import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const ContainerDiv = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
align-items:center;
padding:.5rem;
margin:2rem;
box-shadow: 10px 10px 10px 10px lightgrey;
color:white;
background-Color: purple;
width:40%;
text-shadow: -1px -1px 0 #000, 1px 1px 0 #000, 0 -1px 0 #000,
	0 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 0 0 #000,
    -1px 0 0 #000; 
height:20vh;
border-radius: 10px;
font-size:1.5rem;
line-height: 3rem;
`
const ParentContainer =styled.div`
display:flex;
justify-content: space-around;
flex-wrap:wrap;

`

export default function CharacterList() {

  const [char , setChar] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/').then( res => {
     const characters = res.data.results.filter( character => character.name.toLowerCase().includes(input.toLowerCase()))
     setChar(characters)
    }
      ).catch( err => console.log(err));

  }, [input]);
  const inputHandler = e =>{
    setInput(e.target.value)
  }

  return (
    <section className="character-list">
      <SearchForm inputHandler={inputHandler}/>
      <ParentContainer>
      {char.map(char => (
        <ContainerDiv key={char.id}>
          <div>{char.name}</div>
          <div>{char.status}</div>
          <div>{char.species}</div>
        </ContainerDiv>)) }
      </ParentContainer>
    </section>
  );
}
