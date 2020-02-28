import React from "react";
import styled from 'styled-components';

const Welcome = styled.h1`
color: purple;
text-shadow: -1px -1px 0 #000, 1px 1px 0 #000, 0 -1px 0 #000,
	0 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 0 0 #000,
    -1px 0 0 #000;
    font-size: 2rem;
    letter-spacing: .1rem;
  width:100%;
  padding:1rem;
`
const HeadWelcome = styled.header`
display:flex;
flex-wrap:wrap;
justify-content: center;
padding:1rem;
`
const CustomImg = styled.img`
border: purple 2px solid;
border-radius: 100px;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <HeadWelcome>
        <Welcome>Welcome to the ultimate fan site!</Welcome>
        <CustomImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </HeadWelcome>
    </section>
  );
}
