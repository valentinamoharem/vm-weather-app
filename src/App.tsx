import Axios from 'axios'
import './App.css';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import React, { useContext, useEffect, useRef, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import InputContent from './content/inputContent';
import {
  Button,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core';
import { Context } from './contexts/Context';
import ExtraOutputContent from './components/ExtraOutputContent';
import Forecast from './typings/forecast';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    marginBottom: '1vh',
    width: '100%'
  },
  cardContainer: {
    display: 'flex',
    flexDirecion: 'row',
    columnGap: '20px',
    justifyContent: 'center',
    textAlign: 'left',
  }
});

// TO-DO

// IMPROVE UX (RM BUTTON ON CUSTOM CITIES)
// implement remove button for forecast sections for custom cities
// implement prop removable in forecast output section

// UPDATE UI BY CITIES CHANGE
// implement effects that update rendered content on change of
// context state city array

// REQUESTS
// modify weather request to get spanish content and 5 days forecast
// https://www.weatherbit.io/api/swaggerui/weather-api-v2#/


function App() {
  const { forecast, setForecast, currentLoc, setCurrentLoc, customCities, setCustomCities } = useContext(Context);
  const [customForecasts, setCustomForecasts] = useState<Forecast[]>([])
  const [city, setCity] = useState<String>('')
  const classes = useStyles();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setCurrentLoc([position.coords.latitude, position.coords.longitude])
        const API_KEY = 'f07b547d4c6441f984686643aa29c0c2';
        const url = 'http://api.weatherbit.io/v2.0/forecast/daily?key=' + `${API_KEY}` + '&lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
        Axios.get(url) // request forecast data for specific city
          .then(res => {
            setForecast(res.data)
            if (res.status == 204) {
              alert('Por favor, ingresá una ciudad válida.')
            }
          })
          .catch(err => alert(err))
      })
    } else {
      console.log('geolocalizacion no disponible')
    }
  }, [setCurrentLoc])

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setCity(e.target.value as String)
  };

  const clearInput = () => {
    setCity('')
  }

  const getForecast = (c: String) => {
    const API_KEY = 'f07b547d4c6441f984686643aa29c0c2';
    const url = 'http://api.weatherbit.io/v2.0/forecast/daily?key=' + `${API_KEY}` + '&city=' + c;
    Axios.get(url)
      .then(res => {
        setCustomForecasts(customForecasts.concat(res.data));
      })
      .catch(err => alert(err))
  }

  const handleSubmit = () => {
    setCustomCities(customCities.concat(city))
    getForecast(city);
    clearInput();
  }

  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        {!forecast ? (<div>Loading...</div>) : (
          <div className={classes.root}>
            <Typography variant='h5'>Weather App </Typography>
            <Typography variant='body1'>Five day forecast for <strong>{forecast?.city_name}</strong> (current location)</Typography>
            {currentLoc && <Typography variant="subtitle2">{'(' + currentLoc[0] + ', ' + currentLoc[1] + ')'}</Typography>}
            <br />
            {forecast !== undefined &&
              <div className={classes.cardContainer}>
                {forecast!.data.slice(0, 5).map((d) => {
                  return <WeatherCard forecast={d} />
                })}
              </div>
            }
            <br />
            <br />
            {customForecasts.map(f => <ExtraOutputContent forecast={f} />)}
            {customCities.length >= 0 && (customCities?.length < 5 &&
              <div>
                <Typography variant='body2'>{`Get forecast for up to ${customCities ? 5 - customCities?.length : 5} more ${customCities?.length == 4 ? 'city' : 'cities'}:`}</Typography>
                <br />
                <div><TextField value={city} id="city-input" placeholder="Type in city..." onChange={handleChange} /><br /><br /></div>
                <Button variant='contained' disableElevation color='primary' onClick={handleSubmit}>Submit</Button>
              </div>
            )}
          </div>
        )}
      </header>
      <Footer />
    </div>
  );
}

export default App;