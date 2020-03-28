import React from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core';

// Not yet set up

export default class MakeQuestion extends React.Component {
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