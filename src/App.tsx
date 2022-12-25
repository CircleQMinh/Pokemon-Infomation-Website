import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Core from './features/core/core';
import GlobalHeader from './components/global/GlobalHeader';
import GlobalFooter from './components/global/GlobalFooter';

function App() {
  return (
    <div className="App">
      <GlobalHeader></GlobalHeader>
        <Core></Core>
      <GlobalFooter></GlobalFooter>
    </div>
  );
}

export default App;
