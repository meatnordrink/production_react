import React from 'react';
import { makeStyles, withTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: 'rgba(255, 255, 255, .9)'
        },
        text: {
            secondary: 'rgba(255, 255, 255, .47)'
        }
    }
})

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed', 
    bottom: 0,
    left: 0, 
    right: 0, 
    backgroundColor: '#4791db',
  },
  items: {
      minWidth: 0
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('sessions');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // This is sort of a mess right now; take out the nav stuff, and it looks good. But the nav stuff is overriding the styles of the BottomNavigation elements. 
  // To address this, a few thoughts: 
  //    * Try passing the router in as a component to the <BottomNavigation> element; make sure to wrap the switch in it as well. 
  //    * I probably need to understand prop forwarding. https://material-ui.com/guides/composition/#routing-libraries
  //              NEVERMIND. Actually just had to override one min-width prop. But still read the above; should understand, and would be good to see if, once understood, I can do it without overriding the class.
  //    * Once I have all this set, I'll need to actually make the router work. The best way to do that may be to define each of the routes on App.js, and set this up to take the route functions as props. Or; do that, pass in route functions, but have them change a variable in Screen's state. (Might be good to do a tutorial on Redux once I have this basically set up; that might be relevant to saving state between screens.)
  return (
    <ThemeProvider theme={theme}>
        <Router>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction className={classes.items} component={Link} to={'/home'} label="Home" value="home" icon={<HomeIcon />} />
            <BottomNavigationAction className={classes.items} component={Link} to={'/sessions'} label="Sessions" value="sessions" icon={<MapIcon />} />
            <BottomNavigationAction className={classes.items} component={Link} to={'/tools'} label="Tools" value="tools" icon={<BusinessCenterIcon />} />
            <BottomNavigationAction className={classes.items} component={Link} to={'/rewards'} label="Rewards" value="rewards" icon={<StarBorderIcon />} />
            <BottomNavigationAction className={classes.items} component={Link} to={'/profile'} label="Profile" value="profile" icon={<PersonOutlineIcon />} />
        </BottomNavigation> 
        <Switch>
          <Route path="/home">
            <Typography>Home!</Typography>
          </Route>
          <Route path="/sessions">
            <Typography>Sessions!</Typography>
          </Route>
          <Route path="/tools">
            <Typography>Tools!</Typography>
          </Route>
          <Route path="/rewards">
            <Typography>Rewards!</Typography>
          </Route>
          <Route path="/profile">
            <Typography>Profile!</Typography>
          </Route>
          <Route path="/">
            <Typography>How'd you get here?</Typography>
          </Route>
        </Switch>
        </Router>

    </ThemeProvider>
  );
}