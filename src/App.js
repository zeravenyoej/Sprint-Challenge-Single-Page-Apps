import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import CharacterCard from './components/CharacterCard';


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm/>
      <Route exact path='/' render={(props)=><WelcomePage {...props}/>}/>
      <Route path='/character' render={(props)=><CharacterCard {...props}/>}/>

    </main>
  );
}
