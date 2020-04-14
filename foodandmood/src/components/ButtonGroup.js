import React from 'react';
import { Button, Grid } from '@material-ui/core';

export default function RenderButtonGroup(props) {
 
    let buttons = props.options.map((option, index) => 
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
            onClick={props.optionFunctions[index]}
            > 
            {option} 
          </Button>
        </Grid>
    )
 
    return(
        buttons
    )
}