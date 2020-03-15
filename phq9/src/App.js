import React from 'react';
import { Button, Grid, Typography, Paper } from '@material-ui/core';
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Chart from "react-apexcharts";
import './App.css';

//To do, UI: 
// Add app bar
// See if you can put a stepper in the navbar; if not, put it below. One step for each card.

// To-do, code:
// Refactor MakeQuestion, RenderOptions to accepts props of array with questions, options.
// bold "two weeks"
// Set up grid plug-in, chart at end
// set up catch for suicidal answers, offer resources.
// Extract, optimize; get rid of unnecessary dependencies, republish as build version.

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
          id: "basic-bar",
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
        marginTop:60,
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

// shift to pass in questions and options arrays as props on the MakeQuestion calls, below, once there's more than one question setup.
function App() {
  return (
    // <ThemeProvider theme={theme}>
      <MakeQuestion 
        questions={questionsPHQ9}
        options={optionsPHQ9}
         />
    // </ThemeProvider>
  );
}

export default App;