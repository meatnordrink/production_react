import React from 'react';
import RenderAppBar from './components/AppBar.js'
import RenderPaper from './components/Paper.js'
import RenderImage from './components/Image.js'
import { Button, Grid, Typography, AppBar, Toolbar, IconButton, Paper, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import Chart from "react-apexcharts";
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

//import './App.css';
// import { purple } from '@material-ui/core/colors';


// 1. Set up some styles, in this manner:

// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}

//2. I haven't yet got local images to work. That would be good to figure out. 


function PageOne() {
  return(
    <RenderPaper 
      imageAddress="https://1317562338.rsc.cdn77.org/images/foodMood/fruit_heart_jamie-street-tb5A-QTI6xg-unsplash.jpg"
    />
    // make the imageAddress property conditional; render it if present, not if not.
    // make non-optional text
    // Questions
    // See if I can figure out how to just pass in the components I want...
  )
}



function App() {
  return (
        // 
    // <ThemeProvider theme={theme}>
    <>
    
      <RenderAppBar />
      <PageOne />
    </>
    // </ThemeProvider>

    
  );
}

export default App;