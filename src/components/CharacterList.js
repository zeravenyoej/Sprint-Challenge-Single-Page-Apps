import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res=>{
        //console.log(res)
        setCharacterList(res.data.results)
      })
      .catch(err=>{
        console.log(err)
      })}

      getCharacters();
  }, []);

  console.log(characterList);
  return (
    <section className="character-list">
      {characterList.map(character=>(
        <CharacterCard key ={character.id} character={character}/>
      ))}
    </section>
  );
}
