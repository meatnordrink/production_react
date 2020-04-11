import React from 'react';
import { Typography } from '@material-ui/core';


export default function(props) {
    let text = props.text.map( (text, index) => 
      <Typography paragraph="true" key={index}>
        {text}
      </Typography>
    )
    return (text);  
  }


