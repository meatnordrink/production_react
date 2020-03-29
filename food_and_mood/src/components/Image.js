import React from 'react';
import { Card, CardMedia } from '@material-ui/core';

// clean up

export default function RenderImage(props) {
    return (
        <Card 
          // variant="outlined"
          style={{marginBottom:20}}
          >
          {/* <CardActionArea> */}
            <CardMedia
              component="img"
              height="140"
              width="100"  
              image={ props.imageAddress }
              title="image"
            />
            {/* <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions> */}
        </Card>
      );    
}

