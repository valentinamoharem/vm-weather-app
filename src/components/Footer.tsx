import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    footer: {
        margin: 'auto',
        color: '#aaa',
    }
});

export default function LabelBottomNavigation() {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root}>
            <div className={classes.footer}>
                <Typography variant='body2'>Weather App - 2021</Typography>
            </div>
        </BottomNavigation>
    );
}