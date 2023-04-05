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
import Error from './features/error/Error';
import PokemonTypesDataPage from './features/data/PokemonTypesDataPage';
import PokemonAbilitiesDataPage from './features/data/PokemonAbilitiesDataPage';
import PokemonMovesDataPage from './features/data/PokemonMovesDataPage';
import PokemonItemsDataPage from './features/data/PokemonItemsDataPage';

function App() {
  let homeNavigate:NavigateProps = {
    to:"/home"
  }
  // npx create-react-app pokemon_guessing_game --template redux-typescript
  return (
    <Routes>
      <Route path="/" element={<Navigate {...homeNavigate}> </Navigate>}></Route>
      <Route path="/home" element={<Core></Core>}></Route>

      <Route path="/list" element={<Search></Search>}></Route>

      <Route path="/data/items" element={<PokemonItemsDataPage></PokemonItemsDataPage>}></Route>
      <Route path="/data/types" element={<PokemonTypesDataPage></PokemonTypesDataPage>}></Route>
      <Route path="/data/moves" element={<PokemonMovesDataPage></PokemonMovesDataPage>}></Route>
      <Route path="/data/abilities" element={<PokemonAbilitiesDataPage></PokemonAbilitiesDataPage>}></Route>


      <Route path="/guess" element={<Guessing></Guessing>}></Route>
      <Route path="/battle" element={<Battle></Battle>}></Route>

      <Route path="/pokedex/:id" element={<PokemonInfomation />}></Route>

      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
