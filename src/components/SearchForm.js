import React from "react";
import styled from 'styled-components';

const Section = styled.div`
display:flex; 
justify-content:center;
color: purple;
font-size:1.5rem;
`
const Input = styled.input`
width:40rem;
height:2rem;
margin:1rem;
border:purple 2px solid;
border-radius:10px;

`

export default function SearchForm({inputHandler}) {
 
  return (
    <Section >
     <label htmlFor='input'>
        <Input onChange={inputHandler} type='text' name='input' id='input'/>Search
      </label>
    </Section>
  );
}
