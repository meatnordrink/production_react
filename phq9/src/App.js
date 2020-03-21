import React from 'react';
import { Button, Grid, Typography, AppBar, Toolbar, IconButton, Paper, Menu, MenuItem, Dialog, DialogTitle } from '@material-ui/core';
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Chart from "react-apexcharts";
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

// https://apexcharts.com/docs/react-charts/

//To do, UI: 
// Make the app bar menu actually work.
// See if you can put a stepper in the navbar; if not, put it below. One step for each card.
// adjust the graph spacing so that there's not such a gap between the y index and the chart area
  // -> This seems to be much harder than expected. The elements are being positioned via a transform(translate()) property, and there doesn't seem to be an available prop to adjust their spacing relative to each other. I could try adding a custom class that targets elements having said custom class with the apex charts chart-area custom class, and put in a media query to widen it slightly on mobile.
// implement a custom color scheme (maybe match new app, ish, or something...)

// To-do, code:
// bold "two weeks"
// set up catch for suicidal answers, offer resources. (Consider full-screen dialogue.)
// Extract, optimize; get rid of unnecessary dependencies, republish as build version.
// For functions that rely on state binding in the constructor: rewrite as arrow functions so that they don't need explicit binding.
// Add functionality to menu; make the option open a dialogue that explains what the PHQ9 is.

// Also, finish that tutorial (maybe...?) and move on to making a React Food and Mood.

// const theme = createMuiTheme{
      // implement if I wish to customize colors, etc.
// }
const questionsPHQ9 = ["Little interest or pleasure in doing things.", "Feeling down, depressed, or hopeless.", "Trouble falling or staying asleep, or sleeping too much.", "Feeling tired or having little energy.", "Poor appetite or overeating.", "Feeling bad about yourself - or that you are a failure or have let yourself or your family down.", "Over the last 2 weeks, how often have you had trouble concentrating on things?", "Moving or speaking so slowly that other people could've noticed? Or the opposite - being much more fidgety or restless than usual.", "Thoughts about just wanting to fall asleep and not wake up, harming yourself, or killing yourself?"]

const optionsPHQ9 = ["Not at all", "Several Days", "More than half the days", "Nearly every day"];

class ResultsChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "results-chart",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ["Your Score", "Highest Possible"]
        },
      colors: ['#3f51b5']
      }, 
      series: [
        {
          name: "Score",
          data: [this.props.finalScore, 27]
        }
      ]
    };
  }

    render(){
      return(
        <Grid item xs={12}>
          <Chart 
            options={this.state.options}
            series={this.state.series}
            type="bar"
          />
        </Grid>
      )
    }
}

class MakeQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      userScore: 0
    };
    this.updateQuestionNumber = this.updateQuestionNumber.bind(this);
    this.questionRenderer = this.questionRenderer.bind(this);
  }

  questions = this.props.questions;
  options = this.props.options;

  questionRenderer() {
    let questionNumber = this.state.questionNumber;
    // let questions = this.questions;
    return (
      <RenderQuestions 
        questionNumber={questionNumber}
        questions={this.questions}
      />
    )

  }

  updateQuestionNumber(score) {
    let questionNumber = this.state.questionNumber;
    let userScore = this.state.userScore;
    questionNumber++;
    userScore += score;
    this.setState({
      questionNumber: questionNumber,
      userScore: userScore
    })
  }

  render(){
    return(
      <Paper elevation={12} 
      style={{
        paddingTop:10,
        marginTop:50,
        paddingBottom:160,
        marginLeft:10,
        marginRight:10
        }}>
        <Grid 
          container
          spacing={1}
          direction="column" 
          justify="center"
          alignItems="center"
          style={{marginTop:100}}
          >
              <Grid 
                item 
                xs={10}
                md={6}
                >
                  <this.questionRenderer />
              </Grid>
              <RenderOptions
                options={this.options}
                updateQuestionNumber={this.updateQuestionNumber}
                questionNumber={this.state.questionNumber}
                questions={this.questions}
                userScore={this.state.userScore}
                 />
        </Grid>
      </Paper>
    )
  }
}
function RenderQuestions(props) {
  return(
  <Typography 
    variant="h6" 
    gutterBottom={true}
    align="center"
    // style={{width:360}}
    >
      {props.questions[props.questionNumber]} 
  </Typography>
  )
 }
function RenderOptions(props) {
    if (props.questionNumber >= props.questions.length) {
      const finalScore = props.userScore;
      var depSeverity;
      if (finalScore <5) {
        depSeverity = "very mild";
      } else if (finalScore <10) {
        depSeverity = "mild";
      } else if (finalScore <15) {
        depSeverity = "moderate";
      } else if (finalScore <19) {
        depSeverity = "moderately severe";
      } else if (finalScore >19) {
        depSeverity = "severe";
      } else {
        depSeverity = "The score was not recorded."
      }
      return(
        <Grid item xs={10}>
          <Typography
            variant="h6" 
            paragraph={true}
            align="center"
          >
            Your depression score is: {finalScore}/27. This is considered to be in the {depSeverity} range.
          </Typography>
          <ResultsChart 
            finalScore={finalScore}
          />
          <Typography align="center">
            Note: This assessment does not <em>diagnose</em> depression; only a trained professional can do that.
          </Typography>

        </Grid>
      );
    }
    let buttons = props.options.map( (option, index) => 
        <Grid 
          item 
          xs={8}
          key={option}
          >
          <Button 
            variant="contained" 
            size="large"
            color="primary"
            // fullWidth="true"
            style={{width:200}}
            onClick={() => props.updateQuestionNumber(index)}
            > 
            {option} 
          </Button>
        </Grid>
    )
    return (buttons);
}

function RenderAppBar(){
  // set up a hook for anchorEl
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const openDialog = () => {
    setOpen(true);
    closeMenu();
  }

  const closeDialog = () => {
    setOpen(false);
  }

  return (
    <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={openMenu} />
        <Menu
        id="help-menu"
        anchorEl={anchorEl}
        keepMounted //keepMounted is a property of Modal
        open={Boolean(anchorEl)} //exists based on the existence of anchorEl, set by openMenu and closeMenu
        onClose={closeMenu}
        >
          <MenuItem onClick={openDialog}>What is this?</MenuItem>
          <Dialog onClose={closeDialog} aria-labelledby="what-is-this" open={open}>
              <DialogTitle id="what-is-this">What is this?</DialogTitle>
                  <Typography 
                  style={{paddingLeft:20, paddingRight:20, paddingBottom:20}} 
                  >
                      The PHQ9 is a tool for evaluating depression that has been clinically validated and is widely used by therapists. However, it's not an adequate diagnostic tool on its own. If you think you might be dealing with depression, we encourage you to consult with a quaified therapist.
                  </Typography>
          </Dialog>
      </Menu>
      </IconButton>
    </Toolbar>
  </AppBar>
  )
}

function App() {
  return (
        // <ThemeProvider theme={theme}>
    <>

      <RenderAppBar />

      <MakeQuestion 
        questions={questionsPHQ9}
        options={optionsPHQ9}
         />

   </>
       // </ThemeProvider>
  );
}

export default App;