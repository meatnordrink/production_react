import React from 'react';
import { Button, Card, CardMedia, CardActionArea, Grid, Typography, Paper } from '@material-ui/core';
import RenderImage from './Image'

export default function RenderPaper(props){
 
  function RenderText() {
    let text = props.text.map( (text, index) => 
      <Typography paragraph="true" key={index}>
        {text}
      </Typography>
    )
    return (text);  
  }

  const RenderChoice = props.choice


    // const renderQuestion = () => props.questionMaker

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
        style={{marginTop:30}}
        >

            <Grid item xs={10} md={6}
            >
              <RenderImage 
                imageAddress={props.imageAddress}
              />
              <RenderText />
            </Grid>
              <RenderChoice />
            {/* <RenderOptions
              options={this.options}
              updateQuestionNumber={this.updateQuestionNumber}
              questionNumber={this.state.questionNumber}
              questions={this.questions}
              userScore={this.state.userScore}
              answers={this.state.answers}
                /> */}
      </Grid>
    </Paper>
  )
}
