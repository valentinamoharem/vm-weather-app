// import Axios from 'axios'
import './App.css';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import React from 'react';
import InputContent from './content/inputContent';
import OutputContent from './content/outputContent';
import { useContext } from 'react';
import { Context } from './contexts/Context';

function App() {
  const forecast = useContext(Context).forecast;

  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        { !forecast ? (<InputContent />) : (<OutputContent />) }        
      </header>
      <Footer />
    </div>
  );
}

export default App;