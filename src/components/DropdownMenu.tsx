import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Divider } from '@material-ui/core';
import { Context } from '../contexts/Context';

interface props {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

export default function DropdownMenu(props: props) {
  const { city, setCity, forecast, setForecast, otherCity, setOtherCity } = useContext(Context);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  console.log(forecast)
  console.log(setForecast)
  console.log(otherCity)

  const HandleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setCity(e.target.value as String);
    (e.target.value === 'Other' ? setOtherCity(true) : setOtherCity(false));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={city}
          onChange={HandleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Minneapolis">Minneapolis</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="Kansas">Kansas</MenuItem>
          <Divider />
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}