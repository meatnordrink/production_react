import React from 'react';
import { Grid, Paper } from '@material-ui/core';



export default function RenderPaper(props){

  const RenderChoice = props.choice

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

            <Grid item xs={10} md={6}>
              {props.children}
            </Grid>
              <RenderChoice />
      </Grid>
    </Paper>
  )
}

