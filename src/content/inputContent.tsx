import '../App.css';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import DropdownMenu from '../components/DropdownMenu';

function InputContent() {
    const showTextField = useState<boolean>(false)
    return (
        <div>
            <Typography variant='h5'>Weather App</Typography>
            <Typography variant='body2'>Welcome to the Weather App, please select a city:</Typography>
            <DropdownMenu />
            <br />
            {showTextField[0] && (<div><TextField id="standard-basic" placeholder="Type other city" /><br /><br /></div>)}
            <Button variant='contained' disableElevation color='primary'>Submit</Button>
        </div>
    );
}

export default InputContent;
