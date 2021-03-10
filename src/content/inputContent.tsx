import Axios from 'axios'
import '../App.css';
import TextField from '@material-ui/core/TextField';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import DropdownMenu from '../components/DropdownMenu';
import { Context } from '../contexts/Context';


function InputContent() {
    const { city, setCity, forecast, setForecast, otherCity } = useContext(Context);
    const [showTextField, setShowTextField] = useState<boolean>(false)

    useEffect(() => {
        (otherCity && setShowTextField(true))
    }, [otherCity, city])

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setCity(e.target.value as String)
    };

    const handleSubmit = () => {  
        const API_KEY = 'f07b547d4c6441f984686643aa29c0c2';
        // const API_KEY = process.env.REACT_APP_API_KEY;
        const url = 'http://api.weatherbit.io/v2.0/forecast/daily?key=' + `${API_KEY}` + '&city=' + city;
        Axios.get(url) // request forecast data for specific city
             .then(res => {
             setForecast(res.data)
             if(res.status == 204) {
                alert('Please, type in a valid city.')
             }
             console.log(forecast)
            })
            .catch(err => alert(err))
    }

    return (
        <div>
            <Typography variant='h5'>Weather App</Typography>
            <Typography variant='body2'>Welcome to the Weather App, please select a city:</Typography>
            <DropdownMenu />
            <br />
            {showTextField && (<div><TextField id="standard-basic" placeholder="Type other city" onChange={handleChange} /><br /><br /></div>)}
            <Button variant='contained' disableElevation color='primary' onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

export default InputContent;
