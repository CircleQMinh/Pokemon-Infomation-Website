import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Core from './features/core/core';
import GlobalHeader from './components/global/GlobalHeader';
import GlobalFooter from './components/global/GlobalFooter';
import { Navigate, NavigateProps, Route, Routes } from 'react-router-dom';
import PokemonInfomation from './features/infomation/pkm/PokemonInfomation';
import Battle from './features/battle/Battle';
import Guessing from './features/guessingGame/Guessing';
import Search from './features/search/Search';
import GameData from './features/data/Data';
import PokemonList from './features/search/List';
import Error from './features/error/Error';

function App() {
  let homeNavigate:NavigateProps = {
    to:"/home"
  }
  // npx create-react-app pokemon_guessing_game --template redux-typescript
  return (
    <Routes>
      <Route path="/" element={<Navigate {...homeNavigate}> </Navigate>}></Route>
      <Route path="/home" element={<Core></Core>}></Route>

      <Route path="/list" element={<PokemonList></PokemonList>}></Route>
      <Route path="/search" element={<Search></Search>}></Route>
      <Route path="/data" element={<GameData></GameData>}></Route>
      <Route path="/guess" element={<Guessing></Guessing>}></Route>
      <Route path="/battle" element={<Battle></Battle>}></Route>

      <Route path="/pokedex/:id" element={<PokemonInfomation />}></Route>

      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
