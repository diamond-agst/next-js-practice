import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, IconButton, withStyles, TextField, InputAdornment, createStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: 20
  },
  iconButtons: {
    width: 210,
    display: "flex",
    flexWrap: "wrap",
  }
}));

const SearchTextField = withStyles((theme) =>
  createStyles({
 root: {
      "& .MuiOutlinedInput-root": {
          borderRadius: 12,
          background: "#E6ECF0",
          padding: 0,
          paddingLeft: 20,
          color: theme.palette.primary.main,
          '& .Mui-focused': {
              backgroundColor: "#fff",
              "& fieldset": {
                  borderWidth: 1,
                  borderColor: theme.palette.primary.main
              },
              "& svg path": {
                  fill: theme.palette.primary.main
              }
          },
          "&:hover": {
              "& fieldset": {
                  borderColor: "transparent"
              }
          },
          '& fieldset': {
              borderColor: "transparent",
              borderWidth: 1
          }
      },
      '& .MuiOutlinedInput-input': {
          padding: "12px 14px 14px 5px"
      }
  }

  })
)(TextField);

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <>
      <div>
        <Button color="primary" variant="contained" className={classes.button}>Button</Button>
        <Button color="secondary" variant="contained">Button</Button>
      </div>
      <div>
        <Typography color="primary" variant="h5">Hello world</Typography>
        <Typography color="secondary" variant="h5">Hello world</Typography>
      </div>
      <div className={classes.iconButtons}>
        <IconButton color="primary">
          <ExpandMoreIcon />
        </IconButton>
        <IconButton color="primary">
          <ExpandLessIcon />
        </IconButton>
        <IconButton color="primary">
          <SearchIcon />
        </IconButton>
        <IconButton color="primary">
          <ArrowForwardIcon />
        </IconButton>
        <IconButton color="primary">
          <ArrowBackIcon />
        </IconButton>
        <IconButton color="primary">
          <AttachMoneyIcon />
        </IconButton>
      </div>
      <IconButton color="secondary">
        <Brightness2Icon />
      </IconButton>
      <IconButton color="secondary">
        <BrightnessLowIcon />
      </IconButton>
      <IconButton color="secondary">
        <MenuIcon />
      </IconButton>

      <div>
        <SearchTextField
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
        />
      </div>

    </>
  );
}
