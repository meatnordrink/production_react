import React from 'react';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, makeStyles  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../App.css'

const useStyles = makeStyles({
    root: {
        marginBottom: 6,
    }
})

export default function(props) {
    // takes panelText, panelTitles props.

    let classes = useStyles();

    let panelTitles = props.panelTitles;
    let panelText = props.panelText;

    // template for conditional removal of items
    // if (!suicidal) {
    //     panelTitles.splice(2, 1)
    //     panelText.splice(2, 1)
    // }

    let panels = panelText.map((text, index) => 
        <ExpansionPanel className='expansionPanel'>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
            id="panel-header"
            >
                <Typography style={{fontStyle: "italic"}}>{panelTitles[index]}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {text}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )

    return(
        <div className={classes.root}>
         {panels}
        </div>

    )
}