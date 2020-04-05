import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import RenderAppBar from './components/AppBar'
import RenderPaper from './components/Paper'
import RenderImage from './components/Image'
import RenderButton from './components/Button'
import RenderButtonGroup from './components/ButtonGroup'
//one way or the other, bundle all these so they can be in a single import statement
import FoodOne from './Chapters/food'
import VitaminDOne from './Chapters/vitaminD'
import AlcoholOne from './Chapters/alcohol'
import TobaccoOne from './Chapters/tobacco'
import { Button, Grid, Typography, AppBar, Toolbar, IconButton, Paper, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
// import Chart from "react-apexcharts";
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

//import './App.css';
// import { purple } from '@material-ui/core/colors';

  // just keeping this as an example for setting up the router, as it did work well for that...
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

//_________________________________
//        TO-DO:
// * Go through errors in console, see if any are worth looking into.
// * Put in a simple router, see how that goes. Look at whether state can be saved when hopping between screens. 
// * Make a theme-change feature to put in the menu.
//_________________________________

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4791db'
    }
  }
})

// const useStyles = makeStyles({
//   root: {

//   }
// })

class Screen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: "pageOne"
    };
    this.updatePage = this.updatePage.bind(this);
  }

  updatePage(nextPage) {
    let page = this.state.page;
    // page++;
    page = nextPage;
    this.setState({
      page: page
    })
  }

  render(){
  
    // let pages = [
    //   <PageOne 
    //     handleClick={this.updatePage}
    //   />, 
    //   <PageTwo
    //     handleClick={this.updatePage}
    //   />
    //   ]
    let pages = {
      pageOne: <PageOne handleClick={this.updatePage} />,
      pageTwo: <PageTwo handleClick={this.updatePage} />,
      foodOne: <FoodOne handleClick={this.updatePage} />,
      vitaminDOne: <VitaminDOne handleClick={this.updatePage} />,
      alcoholOne: <AlcoholOne handleClick={this.updatePage} />,
      tobaccoOne: <TobaccoOne handleClick={this.updatePage} />
    }
    // Consider organizing subsections as arrays within arrays; food: { one : <FoodOne> ... } ; though that might not actually be any clearer/cleaner...


    // note that these had to be inside the render function to pass the updatePage function in such a way that it was properly bound.
    let pageToRender = pages[this.state.page]

    return(
      <div>
        {pageToRender}
      </div>
    )
  }


}

function PageOne(props) {
  let text = ["Some of the most exciting research on depression recently has been in the relationship between food and depression.", "Studies have suggested that the impact of significant changes to diet may be as high or higher than therapy or antidepressants."]
  function choice() {
    return(
      <RenderButton
        text="Explore"
        onClick={props.handleClick}
        nextPage="pageTwo"
      />
    )
  }
  
  return(
    <RenderPaper
      imageAddress={require('./assets/fruit_heart_jamie-street-unsplash.jpg')}
      text={text} 
      choice={choice}
    />
  )
}

function PageTwo(props) {
  const text = ["Even smaller and specific changes have been found to have significant impact.", <Typography>Check out a few of the sections below, and see if any of the ideas seem like they'd be good for <b>you</b>.</Typography>]

  const options = ["Food", "Vitamin D", "Alcohol", "Cigarettes"]
  const optionFunctions = [() => props.handleClick("foodOne"), () => props.handleClick("vitaminDOne"), () => props.handleClick("alcoholOne"), () => props.handlclick("tobaccoOne")]
  

  function choice() {
    return(
      <RenderButtonGroup
        options={options}
        optionFunctions={optionFunctions}
      />
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
        
    <ThemeProvider theme={theme}>
   
      <RenderAppBar />
      <Screen />
    </ThemeProvider>

    
  );
}

export default App;