import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: yellow;
  width: 30%;
  border: 1px solid black;
  /* display: flex;
  flex-direction: row; */

`;

export default function CharacterCard(props) {
  return (
    <StyledCard>
      <h2>{props.character.name}</h2>
      <img src={props.character.image}/>
      <h2>{props.character.species}</h2>
    </StyledCard>
    
  )
};
