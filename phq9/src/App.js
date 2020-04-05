import React from 'react';
import { Button, Grid, Typography, AppBar, Toolbar, IconButton, Paper, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, useTheme } from '@material-ui/core/styles'
import Chart from "react-apexcharts";
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
//import { purple } from '@material-ui/core/colors';

// https://apexcharts.com/docs/react-charts/

//To do, UI: 
// See if you can put a stepper in the navbar; if not, put it below. One step for each card.
// adjust the graph spacing so that there's not such a gap between the y index and the chart area
  // -> This seems to be much harder than expected. The elements are being positioned via a transform(translate()) property, and there doesn't seem to be an available prop to adjust their spacing relative to each other. I could try adding a custom class that targets elements having said custom class with the apex charts chart-area custom class, and put in a media query to widen it slightly on mobile.


// To-do, code:
// bold "two weeks"
// Extract, optimize; get rid of unnecessary dependencies, republish as build version.
// Add option to toggle color scheme in drop-down menu.

const theme = createMuiTheme({
  palette: {
    secondary: {
      // main: '#4791db'
      main: '#115293'
    },
    primary: {
      main: '#1976d2'
    }
  }
})

// This style is mainly just a proof of concept; I like it better as all just primary.
const useStyles = makeStyles({
  appBar: {
    backgroundColor: theme.palette.primary.light,
  },

});

const questionsPHQ9 = ["Little interest or pleasure in doing things.", "Feeling down, depressed, or hopeless.", "Trouble falling or staying asleep, or sleeping too much.", "Feeling tired or having little energy.", "Poor appetite or overeating.", "Feeling bad about yourself - or that you are a failure or have let yourself or your family down.", <Typography variant="h6">Over the last <em>2 weeks</em>, how often have you had trouble concentrating on things?</Typography>, "Moving or speaking so slowly that other people could've noticed? Or the opposite - being much more fidgety or restless than usual.", "Thoughts about just wanting to fall asleep and not wake up, harming yourself, or killing yourself?"]

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
      userScore: 0,
      answers: []
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
    let answers = this.state.answers
    answers[questionNumber] = score
    questionNumber++;
    userScore += score;
    this.setState({
      questionNumber: questionNumber,
      userScore: userScore,
      answers: answers
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
                answers={this.state.answers}
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
    const suicidal = props.answers[props.answers.length - 1] > 0

    if (props.questionNumber >= props.questions.length) {
      const suicideWarning = suicidal ? <RenderSuicideDialog /> : null
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
          <div>{suicideWarning}</div>
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

  const theme = useTheme();
  const classes = useStyles();
  return (

    <AppBar className={classes.appBar} position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" aria-label="menu">
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
              <DialogContent>
                <DialogContentText>
                  The PHQ9 is a tool for evaluating depression that has been clinically validated and is widely used by therapists. However, it's not an adequate diagnostic tool on its own. If you think you might be dealing with depression, we encourage you to consult with a quaified therapist.                 
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDialog} color="primary">
                  Close
                </Button>   
              </DialogActions>
          </Dialog>
      </Menu>
      </IconButton>
    </Toolbar>
  </AppBar>
  )
}

function RenderSuicideDialog() {
  const [open, setOpen] = React.useState(true);

  const closeDialog = () => {
    setOpen(false);
  }
  
  // could include more resources below, including for trans/lgbtq teens etc.; but worry that more text will simply dilute the message. Could also attempt to make it detect country and offer the appropriate resources; not sure how reliable that is.
  return(
    <Dialog fullscreen onClose={closeDialog} open={open}>
      <DialogContent>
        <DialogContentText>
          Suicidal thought or urges need to be taken seriously. We urge you to reach out to one of the resources below if you're feeling suicidal; there's help available <b>right now</b>.
        </DialogContentText>
        <DialogContentText>
          The <a href="http://www.crisistextline.org/" rel="noopener noreferrer" target="_blank">Crisis Text Line</a> is a service that operates 24/7, works anywhere in the US, Canada, or the UK, and is for any kind of crisis. A trained crisis volunteer will respond to your text quickly (usually in under 5 minutes). 
          <ul>
            <li>For the US, text <b>741741</b>.</li>
            <li>For Canada, text <b>686868</b>.</li>
            <li>For the UK, <b>85258</b>.</li>
          </ul>
        </DialogContentText>
        <DialogContentText>
          If you're outside the US, <a href="http://befrienders.org" rel="noopener noreferrer" target="_blank">Befrienders Worldwide</a> has links to hotlines throughout the world. They'll help connect you to someone who can listen in a supportive and nonjudgmental way. Click on the link now to be connected.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={closeDialog}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  )
}

function App() {
  return (
        // 

    <ThemeProvider theme={theme}>
    
      <RenderAppBar />

      <MakeQuestion 
        questions={questionsPHQ9}
        options={optionsPHQ9}
         />
    </ThemeProvider>

    
  );
}

export default App;