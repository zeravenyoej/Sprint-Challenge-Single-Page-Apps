import React from "react";
import styled from 'styled-components';

const StyledLoc = styled.div`
    background: #8FBC8F;
    border: 1px solid black;
    width: 30%;
`;

export default function EpisodesCard(props) {
    return (
        <StyledLoc>
           <h2>Name: {props.episode.name}</h2>
           <h3>Episode Number: {props.episode.episode}</h3>
           <h3>Airdate: {props.episode.air_date}</h3>
        </StyledLoc>
)
}
