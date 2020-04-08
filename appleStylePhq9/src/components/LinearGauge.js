import React, { useEffect } from 'react';
import { Grid, Typography, Card, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, useTheme, makeStyles, styled } from '@material-ui/core/styles'

var userScore = '-210px';

const otherStyles = makeStyles({
    root: {
        background: 'linear-gradient(90deg, red, orange, yellow, 80%, #04ef04)',
        transition: '4s'
    },
    choiceCards: {
        // display: 'flex',
        background: 'linear-gradient(90deg, red, orange, yellow, 80%, #04ef04)',
        transition: '4s',
        width: 480,
        // fontSize: 18,
        // fontWeight: 700,
        boxShadow: '0 1px 3px rgba(0,0,0,.1)',
        borderRadius: 11
    },
    choiceText: {
        fontSize: 18,
        fontWeight: 700
    },
    radios: {
        // textAlign: 'right',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 10px',
        marginLeft: 8,
        // marginRight: 2,
    },
    circle: {
        color: '#ededed'
    },
    changed: {
        color: '#748afb',
        transition: '4s',
        transform: props => props.transform
    },
})

export default function(props) {
    const styleProps = { transform: `translate(${props.grade}px)`}
    let classes = otherStyles(styleProps);
    let styleToUse = classes.circle;
     const [radioStyle, setStyle] = React.useState(styleToUse)

    useEffect(() => {
        setTimeout(() => {
            setStyle(classes.changed)
        }, 500);
    }, [])
        
    return (
        <Grid 
        item 
        xs={12}
        style={{padding:8}}
        >
        <Card className={classes.choiceCards}>
            <RadioGroup color="primary" className={classes.choiceCards} value='disabled'>
                <FormControlLabel className={classes.radios} control={<Radio color="primary" className={radioStyle}/>} label={<Typography className={classes.choiceText}></Typography>} labelPlacement="start" />
            </RadioGroup>
        </Card>
    </Grid>
    )
}