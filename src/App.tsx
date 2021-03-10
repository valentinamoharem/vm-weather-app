// import Axios from 'axios'
import './App.css';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import React from 'react';
import InputContent from './content/inputContent';
import OutputContent from './content/outputContent';
import { 
  // useState, 
  useContext, 
  // useEffect 
} from 'react';
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


// TO-DO
// setCity according to input value
// trigger input value with 'other' option in select input menu
// setCity according to text field input value
// handle error for typed city in text field input
// GET forecast using city value
// handle error for GET request 
// set forecast value globally if succesful response
// update app state if necessary (TEST)
// display output forecast data
// set change logic using existence of forecast data
// add functionality to Back button (resets global state for city and/or forecast, sets both to null)
// TEST value reset for global app