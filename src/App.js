import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
//import SearchForm from './components/SearchForm';
import CharacterList from './components/CharacterList';
//import LocationsList from './components/LocationsList';


export default function App() {
  
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters' component={CharacterList}/>
    </main>
  );
}
