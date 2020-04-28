import React from 'react';
import { Typography } from "@material-ui/core";
import RenderButton from '../components/Button';
import RenderPaperCustom from '../components/PaperCustom';
import RenderDropDown from '../components/DropDown';

export default class Tobacco extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: "pageOne"
    };
    this.updatePage = this.updatePage.bind(this);
    this.done = this.done.bind(this);
  }

  done = () => { this.props.handleClick('pageTwo'); }

  updatePage(nextPage) {
    let page = this.state.page;
    page = nextPage;
    this.setState({
      page: page
    })
  }

  render(){
  
    let pages = {
      pageOne: <TobaccoOne handleClick={this.updatePage} />,
      pageTwo: <TobaccoTwo handleClick={this.updatePage} />,
      pageThree: <TobaccoThree handleClick={this.done} />
    }

    let pageToRender = pages[this.state.page]

    return(
      <div>
        {pageToRender}
      </div>
    )
  }



}


function TobaccoOne(props) {

  function choice() {
    return(
      <RenderButton
        text="Tell me more."
        onClick={props.handleClick}
        nextPage="pageTwo"
      />
    )
  }
  
  return(
    <RenderPaperCustom 
      choice={choice}
    >
      <Typography paragraph='true'>
      Smoking is often a response to low mood or stress, and has a short-term anti-depressant effect on the brain. But in the last 15 years, a number of studies have shown that smoking actually helps <em>cause</em> depression.
      </Typography>
    </RenderPaperCustom>
  )

}

function TobaccoTwo(props) {

  function choice() {
    return(
      <RenderButton
        text="Easier said than..."
        onClick={props.handleClick}
        nextPage="pageThree"
      />
    )
  }
  
  return(
    <RenderPaperCustom
      choice={choice}
    >
      <Typography paragraph='true'>
        Regardless of age, income, or education, heavy smoking doubles a person's risk of developing depression. For people who quit smoking, the risk is similar to those who had never smoked at all.
      </Typography>
    </RenderPaperCustom>
  )

}

function TobaccoThree(props) {

  let panelText = [
      <Typography>
        <ul>
          <li><a href='https://www.cdc.gov/tobacco/campaign/tips/quit-smoking/' target='_blank' rel='noopener'>Center for Disease Control and Prevention</a> This site offers tools (many with elements of CBT) to help people develop a successful plan to quit, including online forums, free motivational texts, and a free app called QuitGuide that has great features like supportive reminders at certain locations or times of day you know you have cravings.</li>
          
          <li><a href='http://www.freedomfromsmoking.org' target='_blank' rel='noopener'>The American Lung Association's "Freedom from Smoking" program</a> This rigorous program includes live support. It costs about $100, but is offered free by some employers and is fully or partially covered by some insurance plans. Resources on the page help you figure out if you're covered.</li>
        </ul>
      </Typography>
  ]
  let panelText2 = [
    <Typography>
      <ul>
        <li><em>Tobacco smoking as a risk factor for depression. A 26-year population-based follow-up study. </em><a href='https://doi.org/10.1016/j.jpsychires.2010.06.006' target='_blank' rel='noopener'>Read Here</a></li>
        <li><em>Cigarette smoking and incidence of first depressive episode: An 11-year, population-based follow-up study. </em><a href='https://doi.org/10.1093/aje/kwj058' target='_blank' rel='noopener'>Read Here</a></li>
        <li><em>Tobacco smoking as a risk factor for major depressive disorder: population-based study. </em><a href='https://doi.org/10.1192/bjp.bp.107.046706' target='_blank' rel='noopener'>Read Here</a></li>
      </ul>
    </Typography>
]

  let panelTitles = [ "Click to view resources that help people quit" ]
  let panelTitles2 = [ <Typography style={{color:'#bdbdbd'}}>Selected Sources</Typography> ]

  function choice() {
    return(
      <RenderButton
        text="Back to Menu"
        onClick={props.handleClick}
        nextPage="pageOne"
      />
    )
  }
  
  return(
    <RenderPaperCustom
      choice={choice}
    >
      <Typography paragraph='true'>
        Of course, quitting smoking is easier said than done. There are excellent resources available that can help though, and the benefits are certainly worth the effort.
      </Typography>
      <RenderDropDown panelTitles={panelTitles} panelText={panelText} />
      <Typography paragraph='true'>
        Just reducing <em>how much</em> you smoke can have real and significant benefits, even if you don't quit entirely. People who smoke between 11-20 cigarettes/day have a 30-50% lower risk of depression compared with people who smoke 20+ cigarettes a day. And people who smoke less than 10 cigarettes a day have similar depression risk to people who smoke none. Cutting down in stages is also sometimes easier than quitting cold turkey.
      </Typography>
      <RenderDropDown panelTitles={panelTitles2} panelText={panelText2} />
    </RenderPaperCustom>
  )

}

//exports.FoodOne = FoodOne

