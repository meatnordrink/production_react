import React from 'react';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../assets/mailchimp.css'

import { InputLabel } from '@material-ui/core';

function analyticsEvent() {
    window.ga('send', 'event', 'phq9_external', 'clicked');
    console.log("analytics conversions fired");
}

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '', 
          cheapHamValue: '',
          formDisplay: 'inherit', 
          thanksDisplay: 'none'
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleCheapHam = this.handleCheapHam.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    handleChange(event) {
      this.setState({value: event.target.value});

    }

    handleCheapHam(event) {
        this.setState({cheapHamValue: event.target.value})
    }
  
    handleSubmit(event) {
        if (this.state.cheapHamValue != ""){
            event.preventDefault();

        }
        this.setState({formDisplay: 'none', thanksDisplay: 'inline-block'})
    }

    render() {
        return(
           <> 
        <div id="mc_embed_signup">
		<form action="https://app.us19.list-manage.com/subscribe/post-json" method="post" id="mcSubscribeForm" name="mcSubscribeForm" className="validate" target="hiddenFrame" noValidate onSubmit={this.handleSubmit} style={{display:`${this.state.formDisplay}`}}>
		<div className="mc-field-group">
			<InputLabel style={{color: 'black'}} htmlFor="mce-EMAIL">Email me my results</InputLabel>
			<input type="email" placeholder="Please enter your email" name="EMAIL" className="required email" id="mce-EMAIL" value={this.state.value} onChange={this.handleChange}/>
            <input type="hidden" name="u" value="57db9f19d7709b29b5b8123ad" />
            <input type="hidden" name="id" value="8eb22cf76b" />
            <input type="hidden" name="c" value="?" />
			<input type="hidden" name="GIVEAWAY" value="DepressionTest" />
			<input type="hidden" name="PHQ9VALUE" value={this.props.depSeverity} />
			<div style={{position: 'absolute', left: '-5000px'}} ariahidden="true">
                <input type="text" id="b_57db9f19d7709b29b5b8123ad_8eb22cf76b" name="b_57db9f19d7709b29b5b8123ad_8eb22cf76b" tabIndex="-1" value={this.state.cheapHamValue} onChange={this.handleCheapHam}/>
            </div>
		</div>
        <input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="button" />

		</form>
            <Typography variant='body1' style={{display: `${this.state.thanksDisplay}`, marginTop: '2vh', color: 'gray'}}>Your results have been sent. </Typography>
            <Typography variant='body1' style={{display: `${this.state.thanksDisplay}`, marginTop: '1vh', color: 'gray'}}>Click <a href="https://app.us19.list-manage.com/unsubscribe?u=57db9f19d7709b29b5b8123ad&id=8eb22cf76b" target="_blank">here</a> to opt out of occasional future emails with resources to feel happ        //  xs={12}ier, less stressed, and more in control of your mood.</Typography>
		</div>
        <iframe name="hiddenFrame" src="about:blank" style={{display:'none'}}></iframe>
        </>
      
       )
    }

}


export default function(props) {
    let depSeverity = props.depSeverity;
    let suicidal = props.suicidal;
    let panelText = [
        <Typography>
        Therapy can be incredibly helpful for people experiencing a variety of issues, including low mood and depression.
        
        If you're looking for a therapist, try these ideas:
            <ul>
                <li><a href='https://www.psychologytoday.com/us/therapists' target='_blank'>Psychology Today</a> lists therapists in the US and Canada.</li>
                <li>Try asking your doctor for a referral. They likely know the therapists available in the area, and can help you find one that will meet your needs.</li>
            </ul>
        </Typography>,
        <Typography>
        Medications can help many people overcome depression, especially in combination with therapy.
        
            <ul>
                <li><a href='https://www.helpguide.org/articles/depression/antidepressant-medication.htm' target='_blank'>There are many types of antidepressants</a>.</li>
                <li>Antidepressants are about as effective as psychotherapy (though positive effects tend not to be as long-lasting).</li>
                <li>Medication can be the fastest route to feeling better, particularly in severe depression.</li>
            </ul>
        </Typography>,
        <Typography>
            For people with low mood, it’s not uncommon to think of suicide. However, if you have suicidal thoughts, a plan to harm yourself, or <a href='http://cssrs.columbia.edu/wp-content/uploads/Community-Card-2women-2018c.pdf' target='_blank'>other suicide risk factors</a>, it's important to take it seriously.

            Call a friend or therapist, or make use of these services:
            
            <br />
            <b>In the US:</b>
            <ul>
                <li>Call <b><a href="tel:18002738255">1-800-273-8255</a></b> to speak with a skilled, trained counselor 24/7 or visit the <a href="http://www.suicidepreventionlifeline.org/" target="_blank">National Suicide Prevention Lifeline</a> for a live chat.</li>
                <li><b>Text START to <a href="tel:741741">741741.</a></b> The <a href="http://www.crisistextline.org/" target="_blank">Crisis Text Line</a> operates 24/7 in the US, and is for any kind of crisis.</li>
                For emergencies call <b><a href="tel:911">911</a></b>.
            </ul>
                
            <b>Outside the US:</b>
            <ul>
                <li><a href='http://befrienders.org'>Befrienders Worldwide</a> has links to supportive hotlines throughout the world.</li>
                <li>Use your local emergency services.</li>
            </ul>
            <a href='http://www.suicideapp.com/'>Creating a safety plan</a> (when not in a crisis) can also help you cope and feel safe in the future.
        </Typography>,
        <Typography>
            UpLift is an app that teaches scientifically-backed skills to help you feel better. 

            With 12 weekly sessions and daily tools, you can learn to:
            <ul>
                <li>Use Cognitive Behavioral skills to improve your mood</li>
                <li>Identify your deep-rooted thoughts and triggers</li>
                <li>Regain enjoyment in your hobbies and daily life</li>
            </ul>

            <b>And it's effective.</b> In a study of UpLift, the average user improved their mood by over 50% in the first month.

            Complete the first session of UpLift for free — <a href='https://www.uplift.app' onClick={analyticsEvent}>Get started</a>.
        </Typography>      
        ]
       
    let panelTitles = ['Finding a Therapist', 'Medication for Depression', 'Crisis or Suicide Resources', <Typography><b>Learn Self-Help Skills with UpLift</b></Typography>]

    if (!suicidal) {
        panelTitles.splice(2, 1)
        panelText.splice(2, 1)
    }

    let panels = panelText.map((text, index) => 
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel-content"
            id="panel-header"
            >
                <Typography >{panelTitles[index]}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {text}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )

    return(
        <div>
            {panels}
            <Signup depSeverity={depSeverity}/>
        </div>
    )
}