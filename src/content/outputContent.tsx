import '../App.css';
import React, { useContext } from 'react';
import WeatherCard from '.././components/WeatherCard';
import {
    Button,
    makeStyles,
    Typography
} from '@material-ui/core';
import { Context } from '../contexts/Context';

const useStyles = makeStyles({
    root: {
        margin: 'auto',
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

function OutputContent() {
    const { forecast, setForecast, setCity } = useContext(Context);
    const classes = useStyles();

    const handleClick = () => {
        setCity(null);
        setForecast(null);
    }

    return (
        <div className={classes.root}>
            <Typography variant='h5'>Weather App</Typography>
            <Typography variant='body1'>Three day forecast for {forecast?.city_name}</Typography>
            <br />
            {forecast !== undefined &&
                <div className={classes.cardContainer}>
                    {forecast!.data.slice(0,3).map((d) => {
                        return <WeatherCard forecast={d} />
                    })}
                </div>
            }
            <br />
            <Button variant='outlined' disableElevation color='primary' onClick={handleClick}>Back</Button>
        </div>
    );
}

export default OutputContent;
