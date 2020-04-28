import React from 'react';
import { Typography } from "@material-ui/core";
import RenderButton from '../components/Button';
import RenderPaperCustom from '../components/PaperCustom';
import RenderDropDown from '../components/DropDown';

export default class Alcohol extends React.Component {
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
      pageOne: <AlcoholOne handleClick={this.updatePage} />,
      pageTwo: <AlcoholTwo handleClick={this.updatePage} />,
      pageThree: <AlcoholThree handleClick={this.done} />
    }

    let pageToRender = pages[this.state.page]

    return(
      <div>
        {pageToRender}
      </div>
    )
  }



}


function AlcoholOne(props) {

  function choice() {
    return(
      <RenderButton
        text="What's 'moderate'?"
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
        The data on the relationship between alcohol and depression is not as clear-cut as you might think. While heavy drinkers are at a greatly increased risk of depression (approximately double), moderate drinkers have generally been found to be the lowest-risk group, even lower than those who don't drink at all.
      </Typography>
    </RenderPaperCustom>
  )

}

function AlcoholTwo(props) {

  function choice() {
    return(
      <RenderButton
        text="Got it."
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
        Definitions vary, but generally 1-2 drinks/day is considered "moderate", with women closer to 1 and men to 2. A drink is considered one serving; a glass of wine or beer, or a cocktail.
      </Typography>
    </RenderPaperCustom>
  )

}

function AlcoholThree(props) {

  let panelText = [
      <Typography>
				Until recently, it was generally accepted that 1-2 drinks/day was a healthy level, due to cardiovascular benefits of moderate drinking. (These are probably related to moderate drinking's potential benefit for depression, as depression and cardiovascular disease are physiologically related disorders.)

        However, some recent research has suggested that even moderate drinking can increase the risk of some cancers. Recently, a prominent study found that drinking at all increased risk of death from all causes ("all causes" including anything, like old age, drunk driving, being hit by a car, etc.). The study is the subject of much debate, and the increase in risk for moderate drinkers was very small.
      </Typography>,
      <Typography>
				<Typography paragraph='true'>If you're a heavy drinker, cutting down (many sources recommend 1-2/day as a healthy level) can have positive effects throughout your life. But it's often hard. The site <a href='https://www.drinkaware.co.uk/advice/how-to-reduce-your-drinking/how-to-cut-down/' target='_blank' rel='noopener'>Drinkaware</a> has some great advice and resources on how to go about cutting down successfully.</Typography>
        
        <Typography paragraph='true'>I also recommend consulting with your doctor. They may have resources that can help; and if your body is alcohol-dependent, there can be potentially serious physiological reactions from your body to not having alcohol in your bloodstream.</Typography>
      </Typography>, 
      <Typography>
				<Typography paragraph='true'>If you have a history of alcohol abuse or trouble limiting your consumption, or suspect you might, stopping drinking completely is likely the best choice; and some recent research is suggesting that it's the best health-choice for anyone.</Typography>

        <Typography paragraph='true'>But, quitting drinking can be a huge challenge. The  <a href='https://www.drinkaware.co.uk/' target='_blank' rel='noopener'>Drinkaware site</a> is a great resource for this; it has advice and strategies that can really help. In addition, HelpGuide has a good guide on the subject <a href='https://www.helpguide.org/articles/addictions/overcoming-alcohol-addiction.htm' target='_blank' rel='noopener'>here</a>.</Typography>

        <Typography paragraph='true'>If you're thinking of quitting drinking, <b>especially if you're a heavy drinker</b>, I recommend doing so with your doctor's guidance. People who have become alcohol-dependent yet want to quit drinking may need a doctor's help to address potentially serious physiological problems that may arise when their bodies start to adjust to not having alcohol in their bloodstreams.</Typography>

        <Typography paragraph='true'>It's difficult, but the rewards of quitting can be even bigger than the challenge.</Typography>
      </Typography>,
      <Typography>
					<ul>
            <li><em>Effects of moderate drinking on depression in young adults: Findings from a National Longitudinal Study. </em><a href='https://doi.org/10.2105/AJPH.2003.030700' target='_blank' rel='noopener'>Read Here.</a></li>
            <li><em>Anxiety and depression among abstainers and low-level alcohol consumers. the Nord-Trøndelag Health Study. </em><a href='https://doi.org/10.1111/j.1360-0443.2009.02659.x' target='_blank' rel='noopener'>Read Here.</a></li>
            <li><em>Moderate alcohol use and depression in young adults: Findings from a National Longitudinal Study. </em><a href='http<em>s://doi.org/10.2105/AJPH.2003.030700' target='_blank' rel='noopener'>Read Here.</a></li>
            <li><em>Alcohol use and depression from middle age to the oldest old: gender is more important than age. </em><a href='https://doi.org/10.1017/S1041610212000087' target='_blank' rel='noopener'>Read Here.</a></li>
          </ul>

      </Typography>

  ]

  let panelTitles = [ "What's the debate?", "Resources for cutting down on drinking", "Resources for quitting drinking.", <Typography style={{color:'#bdbdbd'}}>Selected Sources</Typography> ]
    

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
        There are also good reasons to not drink at all; which choice is better is currently the subject of much debate, and the answer may be different for different people. In any case, one thing that *is* clear is that moderate, low, or no drinking is much healthier than heavy drinking.
      </Typography>
      <RenderDropDown panelTitles={panelTitles} panelText={panelText} />
    </RenderPaperCustom>
  )

}

//exports.FoodOne = FoodOne

