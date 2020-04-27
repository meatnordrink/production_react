import React from 'react';
import { Button, Grid, Typography, AppBar, Toolbar, Dialog, DialogContent, DialogContentText, DialogActions, Card, Radio, RadioGroup, FormControlLabel, Box, Divider, ThemeProvider, createMuiTheme, makeStyles, styled} from '@material-ui/core';
import LinearGauge from './components/LinearGauge';
import ScoreResponse from './components/ScoreResponse';
import Resources from './components/Resources';
import './App.css';



//==========================
//To do: 
//  * Read official bit on React animations, consider incorporating any that seem genuinely positive.
//  * Read up on Webpack, clean up the imports via same.
//  * clean up
//  * Read up on Nginx - https://www.freecodecamp.org/news/an-introduction-to-nginx-for-developers-62179b6a458f/ - figure out how to serve. 
//      * DO - https://stackoverflow.com/questions/44278748/how-to-deploy-create-react-app-on-digital-ocean
//      * check out for Firebase (see create-react-app deploy page)
//==========================

//Optional To-Do
// * replace all the 8px paddings around radio buttons, text with some universal style

const useStyles = makeStyles({
  root: {
    color: 'red'
  },
  grid: {
    minWidth: '100%'
  },
  choiceCards: {
    boxShadow: '0 1px 3px rgba(0,0,0,.1)',
    borderRadius: 11
  },
  choiceText: {
    fontSize: 18,
    fontWeight: 700
  },
  radios: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 10px',
    marginLeft: 8,
  },
  circle: {
    color: '#ededed'
  }
});

const NextButton = styled(Button)({
  width: 320,
  borderRadius: 11,
  fontSize: 14,
  marginTop: '3vw',
  padding: 10,
  color: 'white'
})


const theme = createMuiTheme({
  spacing: 12,
  margin: 8,
  palette: {
    primary: {
      main: '#3cb4d3'
    }
  }
})

const questionsPHQ9 = ["Little interest or pleasure in doing things?", "Feeling down, depressed, or hopeless?", "Trouble falling or staying asleep, or sleeping too much?", "Feeling tired or having little energy?", "Poor appetite or overeating?", "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?", "Trouble concentrating on things, such as reading or watching TV?", "Moving or speaking so slowly that other people could've noticed? Or the opposite - being much more fidgety or restless than usual?", "Thoughts about just wanting to fall asleep and not wake up, harming yourself, or killing yourself?"]

const optionsPHQ9 = ["Not at all", "Several days", "More than half the days", "Nearly every day"];

class MakeQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      userScore: 0,
      answers: [],
      disabled: true,
      value: 'disabled'
    };
    this.updateQuestionNumber = this.updateQuestionNumber.bind(this);
    this.questionRenderer = this.questionRenderer.bind(this);
    this.maintainRenderer = this.maintainRenderer.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  questions = this.props.questions;
  options = this.props.options;

  maintainRenderer() {
    let questionNumber = this.state.questionNumber;
    let questionsDone = questionNumber < 9;

      return(
        <div>
          {questionsDone
            ? <Typography variant="body1" align="left" paragraph="true" style={{padding:'0px 8px'}}>Over the last <b>two weeks</b>, how often have you been bothered by ...</Typography>
            : null
          }
        </div>

      )
  }
  
  questionRenderer() {
    let questionNumber = this.state.questionNumber;
    // let questions = this.questions;
    return (
      <RenderQuestions 
        questionNumber={questionNumber}
        questions={this.questions}
      />
    )

  }

  updateQuestionNumber() {
    let questionNumber = this.state.questionNumber;
    let disabled = this.state.disabled;
    let value = this.state.value;
    questionNumber++;
    disabled = !disabled;
    value = 'disabled'
    this.setState({
      questionNumber: questionNumber,
      disabled: disabled,
      value: value
    })
  }

  updateScore(score, optionValue) {
    let questionNumber = this.state.questionNumber;
    let userScore = this.state.userScore;
    let answers = this.state.answers;
    let disabled = this.state.disabled;
    let value = this.state.value;
    answers[questionNumber] = score
    userScore += score;
    if (disabled === true) {
      disabled = !disabled;
    }
    value = optionValue;
    this.setState({
      userScore: userScore,
      answers: answers,
      disabled: disabled, 
      value: value
    })
  }

  render(){
    return(
      <>
      <RenderAppBar />
        <Grid 
          container
          spacing={1}
          direction="column" 
          justify="center"
          alignItems="center"
          style={{marginTop:30}}
          >
            
              <Grid 
                item 
                style={{width: '100%'}}
                xs={12}
                md={5}
                lg={4}
                >
                  <this.maintainRenderer />
                  <this.questionRenderer />
                  <RenderOptions
                  options={this.options}
                  updateQuestionNumber={this.updateQuestionNumber}
                  updateScore={this.updateScore}
                  questionNumber={this.state.questionNumber}
                  questions={this.questions}
                  userScore={this.state.userScore}
                  answers={this.state.answers}
                  value={this.state.value}
                 />
              </Grid>
             {this.state.questionNumber < 9
              ? <NextButton 
              color="primary" 
              variant="contained" 
              onClick={this.updateQuestionNumber}
              disabled={this.state.disabled}
              >
                Next
              </NextButton>
              : null }
        </Grid>
      </>
    )
  }
}
function RenderQuestions(props) {
  return(
  <Typography 
    variant="h5" 
    paragraph={true}
    style={{padding:'0px 8px'}}
    >
      {props.questions[props.questionNumber]} 
  </Typography>
  )
 }
function RenderOptions(props) {
    const classes = useStyles();
    let value = props.value;
    // hook to make the radio selection work. 
    // const [value, setValue] = React.useState('disabled');

    const handleChange = (event) => {
      value = event.target.value;
    }

    const updateScore = (score, event) => {
      props.updateScore(score, event.target.value);
      handleChange(event);
    }

    const suicidal = props.answers[props.answers.length - 1] > 0

    if (props.questionNumber >= props.questions.length) {
      const suicideWarning = suicidal ? <RenderSuicideDialog /> : null
      const finalScore = props.userScore;

      var depSeverity;
      if (finalScore <5) {
        depSeverity = "very mild";
      } else if (finalScore <10) {
        depSeverity = "mild";
      } else if (finalScore <15) {
        depSeverity = "moderate";
      } else if (finalScore <19) {
        depSeverity = "moderately severe";
      } else if (finalScore >19) {
        depSeverity = "severe";
      } else {
        depSeverity = "The score was not recorded."
      }
      let depGrade = finalScore * 3.7
      if (finalScore > 24) {
        depGrade = 89;
      } else if (finalScore < 3) {
        depGrade = 10;
      }

      return(
        <Grid item xs={12}>
          <div>{suicideWarning}</div>
          <Typography
            variant="h6" 
            paragraph={true}
            align="center"
          >
            Your depression score is {finalScore}/27. This is considered to be in the {depSeverity} range.
          </Typography>
          <LinearGauge grade={depGrade}/>
          <Typography align="center" paragraph='true' style={{color: '#737171', paddingTop:8}}>
            Note: This assessment does not <em>diagnose</em> depression; only a trained professional can do that.
          </Typography>
          <ScoreResponse depSeverity={depSeverity}/>
          {(finalScore <10)
            ? <Typography paragraph='true' align='left'>If you're concerned about your mental health, please talk to a health professional like your primary care physician to get a formal diagnosis and to discuss possible treatments.</Typography>
            : <Typography paragraph='true' align='left'>Please talk to a health professional like your primary care physician about what options are right for you.</Typography>
          }
          <Resources depSeverity={depSeverity} suicidal={suicidal}/>
        </Grid>
      );
    }
    let buttons = props.options.map( (option, index) => 
        <Grid 
          item 
          xs={12}
          key={option}
          style={{padding:8}}
          >
          <Card className={classes.choiceCards}>
              <RadioGroup color="primary" className={classes.choiceCards} number={index} value={value} onChange={(e) => updateScore(index, e)}>
                <FormControlLabel className={classes.radios} number={index} value={option} control={<Radio color="primary" className={classes.circle}/>} label={<Typography className={classes.choiceText}>{option}</Typography>} labelPlacement="start" />
              </RadioGroup>
          </Card>
        </Grid>
      
    )
    return (
      buttons
      );
}

function RenderAppBar(props){

  const styles = props.styles;

  //I'd much prefer the icon below wrapped in SvgIcon, but it's refusing to import it. I believe it's an issue with webpack. https://material-ui.com/components/icons/#material-icons
  return (

    <AppBar style={styles} color="transparent" elevation="0" position="static">
    <Toolbar variant="dense">
      <span>
        <img style={{width:80, marginTop:10}} src={require('./assets/UpLift_Logo.svg')} alt=""/>
      </span>
    </Toolbar>
  </AppBar>
  )
}

function RenderSuicideDialog() {
  const [open, setOpen] = React.useState(true);

  const closeDialog = () => {
    setOpen(false);
  }
  
  // could include more resources below, including for trans/lgbtq teens etc.; but worry that more text will simply dilute the message. Could also attempt to make it detect country and offer the appropriate resources; not sure how reliable that is.
  return(
    <Dialog fullscreen="true" onClose={closeDialog} open={open}>
      <DialogContent>
        <DialogContentText>
          Suicidal thought or urges need to be taken seriously. We urge you to reach out to one of the resources below if you're feeling suicidal; there's help available <b>right now</b>.
        </DialogContentText>
        <DialogContentText>
        <b>1-800-273-8255</b>. It's the number for the <a href="http://www.suicidepreventionlifeline.org/">National Suicide Prevention Lifeline</a>, where you can speak with a skilled, trained counselor 24/7. You can also <a href="http://www.suicidepreventionlifeline.org">visit their website</a> to try a live chat.

        </DialogContentText>
        <DialogContentText>
          The <a href="http://www.crisistextline.org/" target="_blank">Crisis Text Line</a> is a service that operates 24/7, works anywhere in the US, Canada, or the UK, and is for any kind of crisis. A trained crisis volunteer will respond to your text quickly (usually in under 5 minutes). 
          <ul>
            <li>For the US, text <b>741741</b>.</li>
            <li>For Canada, text <b>686868</b>.</li>
            <li>For the UK, <b>85258</b>.</li>
          </ul>
        </DialogContentText>
        <DialogContentText>
          If you're outside the US, <a href="http://befrienders.org" target="_blank">Befrienders Worldwide</a> has links to hotlines throughout the world. They'll help connect you to someone who can listen in a supportive and nonjudgmental way. Click on the link now to be connected.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={closeDialog}>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  )
}

function RenderFirstPage(props) {
  let styles={
    marginLeft:'calc(50% - 65px)',
    padding: 0
  }

  return(
    <ThemeProvider theme={theme}>

      <Grid 
          container
          spacing={1}
          direction="column" 
          justify="center"
          alignItems="center"
          style={{marginTop:30}}
          >
            
              <Grid 
                item 
                style={{width: '100%'}}
                xs={12}
                md={5}
                lg={4}
                >
                    <RenderAppBar styles={styles} />
     <Box p={2} border={1} borderColor='#c7c4c4' borderRadius='11px' m={1} style={{backgroundColor:'white'}}>
        <Typography variant='h5' paragraph='true' align='center'>
          Depression Test
        </Typography>
        <Typography paragraph='true'>
          Welcome! This PHQ-9 questionnaire is frequently used by doctors and therapists to screen for depression. It can hopefully shed some light on your own mood.
        </Typography>
        <Divider style={{marginBottom:16}}/>
        <Typography paragraph='true'>
          <b>Important:</b> This test is NOT a diagnostic test. Please consult your physician if you are concerned about your mood.
        </Typography>
        <Grid style={{display:'flex', justifyContent:'center'}}><NextButton color='primary' variant='contained' onClick={props.handleClick} style={{width:'90%', maxWidth:320}}>Begin</NextButton></Grid>
    </Box>
    <Typography variant='caption' align='center' style={{display:'flex', justifyContent: 'space-around', margin:'16px 48px'}}> 
          <a href='https://www.uplift.app/privacypolicy' target='blank'>Privacy Policy</a>   <a href='https://www.uplift.app/termsofuse' target='blank'>Terms of Service</a>
        </Typography>
    </Grid>
    </Grid>


    </ThemeProvider>
  )
}

class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let count = this.state.count;
    count++;
    this.setState({
      count: count
    })
  }

  render(){

    return(
      <div>
        {this.state.count === 0
        ? <RenderFirstPage handleClick={this.handleClick}/>
        : <MakeQuestion 
          questions={questionsPHQ9}
          options={optionsPHQ9}
          />
        }
      </div>

    )
  }

}

function App() {
  return (
        // 

    <ThemeProvider theme={theme}>
    

      <Content />

    </ThemeProvider>

    
  );
}

export default App;