import React from 'react';

import { Button } from '@material-ui/core';

export default function RenderButton(props) {
    return(
        <Button
        component={props.next} 
        variant="contained" 
        size="large"
        color="primary"
        //fullWidth="true"
        //style={{width:200}}
        //onClick={() => props.onClick}
        > 
        {props.text} 
      </Button>
    )
}