import React from 'react';
import { Typography } from '@material-ui/core';

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
    if (depSeverity === 'very mild') {
        text = ['Your results are typically interpreted as "minimal or no depression." Glad to hear it!', 'Even with this low score, some people desire ways to better cope with life’s inevitable strains and stressors, or increase their happiness, satisfaction, and connection to others. The following links may still be helpful to you.']
    } else if (depSeverity === 'mild') {
        text = ["Your results suggest you may be experiencing some symptoms of mild depression.", "At this level, your symptoms may not be having a big impact on your life; however, it is important to monitor them. If you've been mildly depressed for a few months, consider talking to your doctor about dysthymia, a persistent mild depression.", "You may also benefit from new ways to cope with life’s inevitable strains and stressors, or techniques to develop greater energy, satisfaction, or connection to others. If so, some of the following links may be helpful." ]
    } else if (depSeverity === 'moderate') {
        text = ["Your results suggest you may be suffering from moderate depression.","Depressive symptoms can be a real burden and are often hard to face alone. While this is not a diagnostic test, it might be worthwhile to start a conversation with your doctor or a trained mental health professional. ", "There are highly effective, well-researched techniques for feeling better. Finding the right treatment plan can help you feel more like you again."]
    } else if (depSeverity === 'moderately severe') {
        text = ["Your results suggest that you may be suffering from moderately severe depression.","While this is not a diagnostic test, people who scored similar to you typically receive a diagnosis of major depression and have sought professional treatment for this disorder. With this level of symptoms, it would likely be beneficial for you to consult a trained mental health professional right away for a better evaluation of your symptoms and immediate help.", "Depressive symptoms can be a real burden and can be especially difficult to face alone. Fortunately, there are highly effective, well-researched techniques for feeling better. Finding the right treatment plan can make a world of difference."]
    } else {
        text = ["Your results suggest that you may be suffering from severe depression.","While this is not a diagnostic test, people who scored similar to you typically receive a diagnosis of major depression and have sought professional treatment for this disorder. With this level of symptoms, it would likely be beneficial for you to consult a trained mental health professional right away for a better evaluation of your symptoms and immediate help.", "Depressive symptoms can be a real burden and can be especially difficult to face alone. Fortunately, there are highly effective, well-researched techniques for feeling better. Finding the right treatment plan can make a world of difference."]
    }

    return(
        <RenderTypography text={text} />
    )
}




