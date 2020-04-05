import React from 'react';
import { Typography } from "@material-ui/core";
import RenderButton from '../components/Button'
import RenderPaper from '../components/Paper'

export default function FoodPageOne(props) {
        let text = ["New research is confirming that what you eat has a big effect on your mood, and that eating healthy can be powerful protection against depression.", <Typography>In one recent study, the effect of a whole-diet change on people's depression was significantly greater than the levels achieved in most studies of therapy <em>or</em> antidepressants.</Typography>]
        function choice() {
          return(
            <RenderButton
              text="But what to eat?"
              onClick={props.handleClick}
              nextPage="pageOne"
            />
          )
        }
        
        return(
          <RenderPaper
            imageAddress={require('./assets/brooke-lark-unsplash_food.jpg')}
            text={text} 
            choice={choice}
          />
        )

}

//learn how to set up exports
//exports.FoodPageOne = FoodPageOne