import React from 'react';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails  } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



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
            UpLift is a self-led app that teaches scientifically-backed skills to help you feel better.

            With 12 weekly sessions and daily tools, you learn to:
            <ul>
                <li>Recharge your energy</li>
                <li>Identify your deep-rooted thoughts and triggers</li>
                <li>Regain enjoyment in your hobbies and daily life</li>
                <li>Apply the skills of Cognitive Behavioral Therapy (CBT), the #1 psychological treatment for depression</li>
            </ul>

            <b>And it's effective.</b> Computer-delivered CBT programs have been shown to be as effective as face-to-face CBT. In a study of UpLift, the average user improved their mood by over 50% in the first month.

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
        </div>
    )
}