import React from 'react';
import { Typography, makeStyles, styled} from '@material-ui/core';

// class TypographyLeft extends React.Component {
//     render(){
//         return(
//             <Typography align='left' paragraph='true'>
//                 {this.props.text}
//             </Typography>
//         )
//     }
// }

function RenderTypography(props) {
    let text = props.text;
    let paragraphs = text.map((paragraph, index) =>
        <Typography 
         align='left' 
         key={index} 
         paragraph='true' 
        >
            {paragraph}
        </Typography>
    )

    return(paragraphs)
}

export default function(props) {
    let depSeverity = props.depSeverity; 
    let text;
    if (depSeverity == 'very mild') {
        text = ['Your results are typically interpreted as "minimal or no depression." Glad to hear it!', 'Even with this low score, some people desire ways to better cope with life’s inevitable strains and stressors, or increase their happiness, satisfaction, and connection to others. The following links may still be helpful to you.']
        // <TypographyLeft text='Your results are typically interpreted as "minimal or no depression." Glad to hear it!' />
        // <TypographyLeft text='Even with this low score, some people desire ways to better cope with life’s inevitable strains and stressors, or increase their happiness, satisfaction, and connection to others. The following links may still be helpful to you.' />
    } else if (depSeverity == 'mild') {
        text = ["Your results suggest you may be experiencing some symptoms of mild depression.", "At this level, your symptoms may not be having a big impact on your life; however, it is important to monitor them. If you've been mildly depressed for a few months, consider talking to your doctor about dysthymia, a persistent mild depression.", "You may also benefit from new ways to cope with life’s inevitable strains and stressors, or techniques to develop greater energy, satisfaction, or connection to others. If so, some of the following links may be helpful." ]
    } else if (depSeverity == 'moderate') {
        text = [ 'whatever']
    } else if (depSeverity == 'moderately severe') {
        text = [ 'whatever' ]
    } else {
        text = ['whatever']
    }

    return(
        <RenderTypography text={text} />
    )
}




