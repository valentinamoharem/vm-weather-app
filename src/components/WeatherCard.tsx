import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import Sunny from './imgs/sun.svg';
import Cloud from './imgs/cloud.svg';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirecion: 'row',
        columnGap: '10px',
        justifyContent: 'center',
        textAlign: 'left',
    },
    card: {
        padding: '2%',
        width: '175px',
    },
    imgContainer: {
        margin: 'auto'
    },
    img: {
        height: '75px',
        width: '75px',
        display: 'block',
        margin: 'auto'
    }
});

function WeatherCard() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <Paper elevation={0} className={classes.card}>
            <Typography variant='body1'>Date: DD-MM-YY</Typography>
            <Typography variant='body1'>Day: </Typography>
            <Typography variant='body1'>Forecast</Typography>
            <br />
            <div className={classes.imgContainer}>
                <img className={classes.img} src={Sunny} alt='sun' />
            </div>
            <br />
            <Typography variant='body1'>Sunrize: HH:MM</Typography>
            <Typography variant='body1'>Sunset: HH:MM</Typography>
        </Paper>
        <Paper elevation={0} className={classes.card}>
            <Typography variant='body1'>Date: DD-MM-YY</Typography>
            <Typography variant='body1'>Night:</Typography>
            <Typography variant='body1'>Forecast</Typography>
            <br />
            <div className={classes.imgContainer}>
                <img className={classes.img} src={Cloud} alt='cloud' />
            </div>
            <br />
            <Typography variant='body1'></Typography>
            <Typography variant='body1'></Typography>
        </Paper>
        </div>
    )
}

export default WeatherCard;