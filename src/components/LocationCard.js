import React from "react";
import styled from 'styled-components';

const StyledLoc = styled.div`
  background: #8FBC8F;
  border: 1px solid black;
  width: 30%;
`;

export default function LocationCard(props) {
  return (
    <StyledLoc>
      <h2>Name: {props.location.name}</h2>
      <h3>Type: {props.location.type}</h3>
      <h3>Dimension: {props.location.dimension}</h3>
    </StyledLoc>
  )
}
