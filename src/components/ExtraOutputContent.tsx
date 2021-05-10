import Axios from 'axios'
import '../App.css';
import React, { useContext, useEffect, useState } from 'react';
import WeatherCard from '.././components/WeatherCard';
import {
    Button,
    makeStyles,
    Typography
} from '@material-ui/core';

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

interface Props {
    forecast:
    {city_name: String;
    data: [
        {valid_date: String,
        max_temp: String,
        min_temp: String,
        weather: {
            icon: String,
            description: String,
        },
        sunrise_ts: Number,
        sunset_ts: Number,}
    ]} | null;
}

function ExtraOutputContent(props: Props) {
    const classes = useStyles();
    const { forecast } = props;
    return (
        <div>
            <Typography variant='body1'>Five day forecast for <strong>{forecast?.city_name}</strong></Typography>
            <br />
            <div className={classes.cardContainer}>
                {forecast && forecast!.data.slice(0, 5).map((d) => {
                    return <WeatherCard forecast={d} />
                })}
            </div>
            <br />
        </div>
    );
}

export default ExtraOutputContent;