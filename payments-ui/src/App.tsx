import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search/Search';
import PageHeader from './components/PageHeader/PageHeader';
import Transactions from './components/Transactions/Transactions';
function App() {
  return (
    <>
    <PageHeader/>
    <Search/>
    <Transactions/>
   </>
  );
}

export default App;
