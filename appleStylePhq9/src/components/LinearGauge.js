import React, { useEffect } from 'react';
import { Grid, Typography, Card, Radio, RadioGroup, FormControlLabel, FormHelperText, FormLabel } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, useTheme, makeStyles, styled } from '@material-ui/core/styles'

var userScore = '-210px';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(90deg, #04ef04, 10%, yellow, orange, red)',
        transition: '4s'
    },
    choiceCards: {
        display: 'flex',
        background: 'linear-gradient(90deg, #04ef04, 10%, yellow, orange, red)',
        transition: '4s',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // fontSize: 18,
        // fontWeight: 700,
        boxShadow: '0 1px 3px rgba(0,0,0,.1)',
        borderRadius: 11,
    },
    // cardTransform: {
    //     display: 'flex',
    //     background: 'linear-gradient(90deg, #04ef04, 10%, yellow, orange, red)',
    //     transition: '4s',
    //     width: '100%',
    //     flexDirection: 'row',
    //     justifyContent: 'flex-end',
    //     boxShadow: '0 1px 3px rgba(0,0,0,.1)',
    //     borderRadius: 11,
    // },
    choiceText: {
        display: 'flex', 
        color: 'black',
        fontSize: 14,
        fontWeight: 400
    },
    radios: {
        // textAlign: 'right',
        display: 'flex',
        padding: '8px 0px 0px 0px',
        marginLeft: 0,
        transition: '4s',
        justifyContent: 'flex-start',
        // marginLeft: props => props.marginLeft
        // transition: '4s',
        // transform: props => props.transform
    },
    radioTransform: {
        // textAlign: 'right',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '8px 0px 0px 0px',
        transition: '4s',
        justifyContent: 'flex-end',
        marginLeft: props => props.marginLeft
    },
    circle: {
        color: '#2e4bf100',
        backgroundColor: 'black',
        width: 3,
        height: 10,
        paddingTop: 0,
        border: '2px black solid', 
        marginBottom: 4,
        transform: 'scale(.5)'
    },
    // changed: {
    //     color: '#748afb',
    //     transition: '4s',
    //     paddingTop: 0,
    // },
})

export default function(props) {
    const styleProps = { marginLeft: `calc(${props.grade}%)`}
    let classes = useStyles(styleProps);
    let styleToUse = classes.radios;
    const [radioStyle, setStyle] = React.useState(styleToUse)

    useEffect(() => {
        setTimeout(() => {
            setStyle(classes.radioTransform)
        }, 500);
    }, [])
        
    return (
        <Grid 
        item 
        style={{padding:8}}
        >
        <Grid
        //  xs={12}
         style={{display:'flex', justifyContent:'space-between', paddingBottom: 12, color: '#737171', width:'80%'}}
        >
            <Typography>Mild</Typography>
            <Typography>Moderate</Typography>
            <Typography>Severe</Typography>
        </Grid>

        <Card className={classes.choiceCards}>
            <RadioGroup color="primary" className={classes.choiceCards} value='disabled'>
                <FormControlLabel className={radioStyle} control={<Radio color="primary" className={classes.circle}/>} label={<Typography className={classes.choiceText}>You</Typography>} labelPlacement="top" />
            </RadioGroup>
        </Card>
    </Grid>
    )
}