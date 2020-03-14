import React from 'react';
import { Button, Card, Grid, Typography, Paper } from '@material-ui/core';
import './App.css';

//To do, UI: 
// Add navbar with help drop-down
// See if you can put a stepper in the navbar; if not, put it below. One step for each card.

// To-do, code:
// Refactor to set appropriate CSS elements as a theme; figure out CSS-in-JSS. (In general, see if I'm including Material-ui specifiers in the most elegant way.)
// Refactor MakeQuestion, RenderOptions to accepts props of array with questions, options.
// Deal with what happens when we get to end of questions array.
// Record answers as variables; display at end.


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

  questions = ["Little interest or pleasure in doing things.", "Feeling down, depressed, or hopeless.", "Trouble falling or staying asleep, or sleeping too much.", "Feeling tired or having little energy.", "Poor appetite or overeating.", "Feeling bad about yourself - or that you are a failure or have let yourself or your family down.", "Over the last 2 weeks, how often have you had trouble concentrating on things?", "Moving or speaking so slowly that other people could've noticed? Or the opposite - being much more fidgety or restless than usual.", "Thoughts about just wanting to fall asleep and not wake up, harming yourself, or killing yourself?"]
  // eventually, write a function to bold "2 weeks"

  questionRenderer() {
    var questionNumber = this.state.questionNumber;
    var questions = this.questions;
    return (
      <RenderQuestions 
        questionNumber={questionNumber}
        questions={questions}
      />
    )

  }

  updateQuestionNumber(score) {
    var questionNumber = this.state.questionNumber;
    questionNumber++;
    this.setState({
      questionNumber: questionNumber,
      userScore: userScore + score
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
                xs={12}
                >
                  <this.questionRenderer />
              </Grid>
              <RenderOptions
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
    gutterBottom="true" 
    align="center"
    style={{width:360}}
    >
      {props.questions[props.questionNumber]} 
  </Typography>
  )
 }
function RenderOptions(props) {
    if (props.questionNumber >= props.questions.length) {
      return(
        <Typography>
          Your depression score is: {props.userScore}
        </Typography>
      );
    }
    let options = ["Not at all", "Several Days", "More than half the days", "Nearly every day"];
    let buttons = [];
    for (let i=0; i < options.length; i++) {
      buttons.push(
        <Grid item xs={8}>
          <Button 
            variant="contained" 
            size="large"
            color="primary"
            // fullWidth="true"
            style={{width:200}}
            score={i+1}
            onClick={props.updateQuestionNumber(score)}
            > 
            {options[i]} 
          </Button>
        </Grid>
      )
    }
    return (buttons);
}

// ultimately, I want to be passingin the questions and options arrays as props on the MakeQuestion calls below. 
function App() {
  return (
    <MakeQuestion />
  );
}

export default App;