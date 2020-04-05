import React from 'react';
import { Card, CardMedia, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  softShadow: {
    boxShadow: '0 1px 3px rgba(0,0,0,.1)',
    marginBottom: 20
  }
})

export default function RenderImage(props) {
    let classes = useStyles();
    return (
        <Card 
          className={classes.softShadow}
          >
            <CardMedia
              component="img"
              height="140"
              width="100"  
              image={ props.imageAddress }
              title="image"
            />
        </Card>
      );    
}

