import Axios from 'axios'
import '../App.css';
import TextField from '@material-ui/core/TextField';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Context } from '../contexts/Context';

function InputContent() {
    const { customCities, setCustomCities } = useContext(Context);
    const [city, setCity] = useState<String | null>(null)

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setCity(e.target.value as String)
    };

    const handleSubmit = () => {
      if(!city){
        return
      }
      
      let updatedCities = customCities;
      updatedCities?.push(city)
      setCustomCities(updatedCities)
    }

    return (
        <div>
            <Typography variant='body2'>{`Get forecast for up to ${ customCities ? 5 - customCities?.length : 5} more ${customCities?.length == 4 ? 'city' : 'cities'}:`}</Typography>
            <br />
            <div><TextField id="standard-basic" placeholder="Type in city..." onChange={handleChange} /><br /><br /></div>
            <Button variant='contained' disableElevation color='primary' onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

export default InputContent;
