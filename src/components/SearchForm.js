import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function SearchForm(props) {

  const [query, setQuery] = useState('');

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res=>{
        const filteredRes = res.data.results.filter(character=>character.name.toLowerCase().includes(query.toLowerCase()));
        props.setCharacterList(filteredRes);
      })
      .catch(err=>console.log(err))
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };


  return (
    <section className="search-form">
      <form>
        <input
          type='text'
          name='name'
          placeholder='type character name'
          value={query.name}
          onChange={handleChange}
        />
      
      </form>
    </section>
  );
}
