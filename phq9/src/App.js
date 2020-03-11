import React from 'react';
import { Button, Card, Grid, Typography, Paper } from '@material-ui/core';
import './App.css';

// class MiddleContainer extends React.Component {
//   render(){
//     return(
//       <Container maxWidth="sm" justify="center" alignItems="center">
//           <Button variant="contained" color="primary" alignItems="center" justify="center">
//           How are you feeling?
//           </Button> 
//       </Container>
//     )
//   }
// }

class MiddleGrid extends React.Component {
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
              <Typography 
              variant="h6" 
              gutterBottom="true" 
              align="center"
              style={{width:360}}
              >
                Little interest or pleasure in doing things. 
              </Typography>
              </Grid>
              <RenderOptions />
        </Grid>
      </Paper>
    )
  }
}

function RenderOptions() {
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
            > 
            {options[i]} 
          </Button>
        </Grid>
      )
    }
    return (buttons);
}

function App() {
  return (
    <MiddleGrid />
  );
}

export default App;