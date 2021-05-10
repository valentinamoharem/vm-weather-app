import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    root: {
    },
    card: {
        padding: '10px',
        width: '230px',
    },
    imgContainer: {
        margin: 'auto'
    },
    img: {
        display: 'block',
        margin: 'auto'
    }
});

interface Props {
    forecast:
        {valid_date: String,
            max_temp: String,
            min_temp: String,
            weather: {
                icon: String,
                description: String,
            },
            sunrise_ts: Number,
            sunset_ts: Number,
        } | null;
}

function WeatherCard(props: Props) {
    const classes = useStyles();

    if(!props.forecast){
        return (
            <div>No forecast</div>
        )
    }

    const forecast = props.forecast;
    const sunrise_ts = Number(forecast.sunrise_ts);
    const sunset_ts = Number(forecast.sunset_ts);
    const sunrise_date = new Date(1000 * sunrise_ts);
    const sunrise = sunrise_date.toLocaleString();
    const sunset_date = new Date(1000 * sunset_ts);
    const sunset = sunset_date.toLocaleString();
    const dynamic_filename = forecast.weather.icon;

     return (
        <div className={classes.root}>
        <Paper elevation={0} className={classes.card}>
            <Typography variant='body1'>Date: {forecast.valid_date}</Typography>
            <Typography variant='body1'>Max. Temp: {forecast.max_temp}</Typography>
            <Typography variant='body1'>Min. Temp: {forecast.min_temp}</Typography>
            <Typography variant='body1'>{forecast.weather.description}</Typography>
            <div className={classes.imgContainer}>
                <img className={classes.img} src={require(`./icons/${dynamic_filename}.png`).default} alt={'weather icon'} />
            </div>
            <Typography variant='body1'>Sunrise: {sunrise}</Typography>
            <Typography variant='body1'>Sunset: {sunset}</Typography>
        </Paper>
        </div>
    )
}

export default WeatherCard;