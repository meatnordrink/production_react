import React from 'react';
import { Button, Card, CardMedia, CardActionArea, Grid, Typography, Paper } from '@material-ui/core';
import RenderImage from './Image'


export default function RenderPaper(props){
 
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
                  <RenderImage 
                  imageAddress={props.imageAddress}
                />
                    {/* <this.questionRenderer /> */}
                </Grid>
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

