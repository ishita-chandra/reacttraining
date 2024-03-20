import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import SongList from './components/Song/SongList';

function App() {
  return (
    <>
    <h1>Hello world</h1>
    <Greeting name="ishita" age={21}/>
    <SongList/>
    </>
  );
}

export default App;
