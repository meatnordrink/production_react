import React from 'react';

import { Button } from '@material-ui/core';

export default function RenderButton(props) {
    return(
        <Button
        variant="contained" 
        size="large"
        color="primary"
        onClick={() => props.onClick(props.nextPage)}
        > 
        {props.text} 
      </Button>
    )
}