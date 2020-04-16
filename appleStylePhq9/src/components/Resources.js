import React from 'react';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, styled  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import parse from 'html-react-parser';

import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

import Mailchimp from 'react-mailchimp-form';
import { useMailchimp } from 'react-use-mailchimp';

// const NextButton = styled(Button)({
//     width: 320,
//     borderRadius: 11,
//     fontSize: 14,depSeverity = this.props.depSeverity;
//     marginTop: '3vw',
//     padding: 10,
//     color: 'white'
//   })

// function PrintButton(depSeverity) {

//     return(




class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    //   event.preventDefault();
    }
  
    // handleSubmit(event) {
    // //   alert('A name was submitted: ' + this.state.value);
    //     // event.preventDefault();
    // //     fetch("https://app.us19.list-manage.com/subscribe/post", {
    // //         method: "post",
    // //         headers: {"Content-Type": "application/json"},
    // //         body: JSON.stringify({
    // //             u: "57db9f19d7709b29b5b8123ad",
    // //             id: "8eb22cf76b",
    // //             MERGE0: "reactWorked@fakdle.com",
    // //             GIVEAWAY: "DepressionTest",
    // //             PHQ9VALUE: "severe"
          
    // //     })
    // //   })
    // }

    // render() {
    //     return(
    //     <form onSubmit={this.handleSubmit}>
    //       <label>
    //         Email:
    //         <input type="email" autocapitalize="off" autocorrect="off" size="25" value={this.state.value} onChange={this.handleChange}></input>
    //       </label>
    //       <input type="submit" value="Submit" />
    //     </form>
    //     )
    // }
    render() {
        return(
        <div id="mc_embed_signup">
		<form action="https://app.us19.list-manage.com/subscribe/post" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
			<div id="mc_embed_signup_scroll">
		<div className="mc-field-group">
			<label htmlFor="mce-EMAIL">Email Address </label>
			<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" value={this.state.value} onChange={this.handleChange}/>
            <input type="hidden" name="u" value="57db9f19d7709b29b5b8123ad" />
            <input type="hidden" name="id" value="8eb22cf76b"></input>
			<input type="hidden" name="GIVEAWAY" value="DepressionTest" />
			<input type="hidden" name="PHQ9VALUE" value="severe" />
		</div>
        <div className="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
			</div>
		</form>
		</div>

		/* <script type='text/javascript' src='https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script> */
        )
    }
}
{/* 
    render() {
      return (
        <div id="mc_embed_signup">
        <form action="https://app.us19.list-manage.com/subscribe/post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" method="POST" onSubmit={this.handleSubmit} noValidate>
          <label>
            Email:
            <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value={this.state.value} onChange={this.handleChange}></input>
          </label>
          <input type="hidden" name="u" value="57db9f19d7709b29b5b8123ad" />
            <input type="hidden" name="id" value="8eb22cf76b"></input>
          <input type="hidden" name="GIVEAWAY" value="DepressionTest" />
          <input type="hidden" name="PHQ9VALUE" value="severe" />

          <div className="mc-field-group input-group" style={{display:'none'}}>
			<strong>UpLift Blog </strong>
			<ul>
                <li><input type="checkbox" value="32" name="group[4851][64]" id="mce-group[4851]-4851-0" checked /><label for="mce-group[4851]-4851-0">Depression Test</label></li>
		</ul>
		</div>
			<div id="mce-responses" className="clear">
				<div className="response" id="mce-error-response" style={{display:'none'}}></div>
				<div className="response" id="mce-success-response" style={{display:'none'}}></div>
			</div> 

			<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_57db9f19d7709b29b5b8123ad_8eb22cf76b" tabindex="-1" value="" />

            </div>
			<div className="clear"><input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>

        </form>

        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>

        </div>
      );
    }
   } 
 */}
  

{/* <form >
    <input type="hidden" name="u" value="57db9f19d7709b29b5b8123ad">
    <input type="hidden" name="id" value="8eb22cf76b"></input>

    <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value=""> */}

{// class Signup extends React.Component {
//     depSeverity = this.props.depSeverity;

//     render() {
        
//       return (
//           <Mailchimp
//           action='https://app.us19.list-manage.com/subscribe/post?u=57db9f19d7709b29b5b8123ad&amp;id=8eb22cf76b'
//           fields={[
//             {
//               name: 'EMAIL',
//               placeholder: 'Email',
//               type: 'email',
//               required: true
//             },
//             {
//               name: 'GIVEAWAY',
//               type: 'hidden',
//               value: 'DepressionTest'              
//             },
//             {
//               name: 'PHQ9VALUE',
//               type: 'hidden',
//               value: 'severe'              
//             },            
//           ]}
//           />
//       );
//     }
//   }
  

//         //         <input type="hidden" name="GIVEAWAY" value="DepressionTest" />
//         //         <input type="hidden" name="PHQ9VALUE" value={depSeverity} />
}
export default function(props) {
    let depSeverity = props.depSeverity;
    let suicidal = props.suicidal;
    let panelText = [
        <Typography>
        Therapy can be incredibly helpful for people experiencing a variety of issues, including low mood and depression.
        
        If you're looking for a therapist, try these ideas:
            <ul>
                <li><a href='https://www.psychologytoday.com/us/therapists'>Psychology Today</a> lists therapists in the US and Canada.</li>
                <li>Try asking your doctor for a referral. They likely know the therapists available in the area, and can help you find one that will meet your needs.</li>
            </ul>
        </Typography>,
        <Typography>
        Medications can help many people overcome depression, especially in combination with therapy.
        
            <ul>
                <li><a href='https://www.helpguide.org/articles/depression/antidepressant-medication.htm'>There are many types of antidepressants</a>.</li>
                <li>Antidepressants are about as effective as psychotherapy (though positive effects tend not to be as long-lasting).</li>
                <li>Medication can be the fastest route to feeling better, particularly in severe depression.</li>
            </ul>
        </Typography>,
        <Typography>
            For people with low mood, it’s not uncommon to think of suicide. However, if you have suicidal thoughts, a plan to harm yourself, or <a href='http://cssrs.columbia.edu/wp-content/uploads/Community-Card-2women-2018c.pdf'>other suicide risk factors</a>, it's important to take it seriously.

            Call a friend or therapist, or make use of these services:

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
            UpLift is an app that teaches scientifically backed skills to help you feel better. 

            With 12 weekly sessions and daily tools, you can learn to:
            <ul>
                <li>Use Cognitive Behavioral skills to improve your mood</li>
                <li>Identify your deep-rooted thoughts and triggers</li>
                <li>Regain enjoyment in your hobbies and daily life</li>
            </ul>

            <b>And it's effective.</b> In a study of UpLift, the average user improved their mood by over 50% in the first month.

            Complete the first session of UpLift for free — <a href='https://www.uplift.app'>Get started</a>.
        </Typography>      
        ]
       
    let panelTitles = ['Finding a Therapist', 'Medication for Depression', 'Crisis or suicide resources', <Typography><b>Learn self-help skills with UpLift</b></Typography>]

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
            <Signup />
        </div>
    )
}