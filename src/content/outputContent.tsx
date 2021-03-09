import '../App.css';
import React from 'react';
import WeatherCard from '.././components/WeatherCard';
import {
    Button,
    makeStyles,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        margin: 'auto',
        width: '100%'
    },
    cardContainer: {
        display: 'flex',
        flexDirecion: 'row',
        columnGap: '15px',
        justifyContent: 'center',
        textAlign: 'left',
    }
});

function OutputContent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h5'>Weather App</Typography>
            <Typography variant='body1'>Three day forecast for Buenos Aires</Typography>
            <br />
            <div className={classes.cardContainer}>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            </div>
            <br />
            <Button variant='outlined' disableElevation color='primary'>Back</Button>
        </div>
    );
}

export default OutputContent;
