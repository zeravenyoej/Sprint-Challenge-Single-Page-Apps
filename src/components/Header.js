import React from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const StyledLinks = styled.div`
  background-color: #ffffcc;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5rem;
  padding: 2.5%;
  border: 1px dashed black;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <StyledLinks>
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
        <Link to='/locations'>Locations</Link>
        <Link to='/episodes'>Episodes</Link>
      </StyledLinks>
    </header>
  );
}
