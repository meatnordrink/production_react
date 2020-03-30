import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import RenderAppBar from './components/AppBar.js'
import RenderPaper from './components/Paper.js'
import RenderImage from './components/Image.js'
import RenderButton from './components/Button.js'
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

// Do this all over again with state, not router.

class Screen extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      page: 0
    };
    this.updatePage = this.updatePage.bind(this);
  }

  pages = [PageOne(), PageTwo()]

  updatePage() {
    let page = this.state.page;
    page++;
    this.setState({
      page: page
    })
  }

  render(){
    return(
      <RenderScreen
        page={this.state.page}
        pages={this.pages[this.state.page]}
        handleClick={this.updatePage}
       />

    )
  }


}

function RenderScreen(props) {
  if (props.page = 0) {
      let imageAddress = require('./assets/fruit_heart_jamie-street-unsplash.jpg');
      let text = ["Some of the most exciting research on depression recently has been in the relationship between food and depression.", "Studies have suggested that the impact of significant changes to diet may be as high or higher than therapy or antidepressants."]
      let choice = 
  }

  return(
    <RenderPaper
      imageAddress={imageAddress}
      text={text} 
      choice={choice}
    />
  )
}


function PageOne() {
  let text = ["Some of the most exciting research on depression recently has been in the relationship between food and depression.", "Studies have suggested that the impact of significant changes to diet may be as high or higher than therapy or antidepressants."]
  function choice() {

  }
  
  // function choice() {
  //   return(
  //     <Router>
  //         <Button component={Link} to="/two" variant="contained" color="primary">
  //           Explore
  //         </Button>
  //       <Route exact path="/two">
  //         <PageTwo />
  //       </Route>
  //     </Router>
  //   )
  // }

  // return(
  //   <RenderPaper
  //     imageAddress={require('./assets/fruit_heart_jamie-street-unsplash.jpg')}
  //     text={text} 
  //     choice={choice}
  //   />
    // make the imageAddress property conditional; render it if present, not if not.
    // make non-optional text
    // Questions
    // See if I can figure out how to just pass in the components I want...
  )
}

function PageTwo() {
  let text = ["Even smaller and specific changes have been found to have significant impact."]

  function choice() {
    return(
      <Button>Don't click this</Button>
    )
  }

  return(
    <RenderPaper
      imageAddress={require('./assets/walnuts_shutterstock_376654033.jpg')}
      text={text}
      choice={choice}
    />
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