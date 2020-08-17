import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'center'

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    textAlign: 'center'
  },
}));

export default function TimePicker({setHour, setMin}) {
  const classes = useStyles();

  const setTime = timeString => {
    let timeArray = timeString.split(":")
    let hour = parseInt(timeArray[0])
    let min = parseInt(timeArray[1])
    setHour(hour)
    setMin(min)
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        type="time"
        onChange={(event)=>{event.preventDefault();setTime(event.target.value)}}
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}
