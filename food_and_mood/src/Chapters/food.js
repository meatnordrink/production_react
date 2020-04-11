import React from 'react';
import { Typography } from "@material-ui/core";
import RenderButton from '../components/Button';
import RenderPaper from '../components/Paper';
import RenderPaperCustom from '../components/PaperCustom';
import RenderDropDown from '../components/DropDown';
import RenderParagraphs from '../components/Paragraphs';
import RenderImage from '../components/Image';
import '../App.css'

export default class Food extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: "pageOne"
    };
    this.moveForward = this.moveForward.bind(this);
    this.done = this.done.bind(this);
  }

  done = () => { this.props.handleClick('pageTwo'); }

  moveForward(nextPage) {
    let page = this.state.page;
    page = nextPage;
    this.setState({
      page: page
    })
  }

  render(){
  
    let pages = {
      pageOne: <FoodOne handleClick={this.moveForward} />,
      pageTwo: <FoodTwo handleClick={this.moveForward} />,
      pageThree: <FoodThree handleClick={this.done} />
    }

    let pageToRender = pages[this.state.page]

    return(
      <div>
        {pageToRender}
      </div>
    )
  }



}


function FoodOne(props) {

  let text = ["New research is confirming that what you eat has a big effect on your mood, and that eating healthy can be powerful protection against depression.", <Typography>In one recent study, the effect of a whole-diet change on people's depression was significantly greater than the levels achieved in most studies of therapy <em>or</em> antidepressants.</Typography>]
  function choice() {
    return(
      <RenderButton
        text="But what to eat?"
        onClick={props.handleClick}
        nextPage="pageTwo"
      />
    )
  }
  
  return(
    <RenderPaper
      imageAddress={require('./assets/brooke-lark-unsplash_food.jpg')}
      text={text} 
      choice={choice}
    />
  )

}

function FoodTwo(props) {

  let text = ["New recommendations about what's healthy seem to come out every week. Should you be eating açai? Spirulina? Kelp?"]
  function choice() {
    return(
      <RenderButton
        text="Wild Yak Meat?"
        onClick={props.handleClick}
        nextPage="pageThree"
      />
    )
  }
  
  return(
    <RenderPaper
      imageAddress={require('./assets/luke-michael-unsplash_fruites.jpg')}
      text={text} 
      choice={choice}
    />
  )

}

function FoodThree(props) {

  let panelText = [
      <Typography>
        Traditional diets (such as Mediterranean, Scandinavian, and Japanese) have been shown to help prevent depression. Researchers believe that this is because they rely on a wide variety of minimally-processed foods and fish.

        "Traditional diets" mean diets that existed before the modern American diet.
      </Typography>,
      <Typography>
        Alright, of course, everyone knows these things are healthy for you. The point here is to make sure that these make up <em>most</em> of your diet, which leads us to the third principle:
      </Typography>,
      <Typography className="winkAfter">
        I'm sure this isn't a big surprise either. A significant amount of fast food, commercially produced baked goods, white breads, and sweets in the diet all make depression more likely. All of these things tend to increase brain inflammation and reduce many types of brain function, both of which are associated with depression. (Of course, we wouldn't deny that some chocolate in moderation can be a powerful mood booster.) 
      </Typography>,
      <Typography>
        Funnily enough, there's a lot of evidence that including a lot of fish in your diet helps prevent depression. Scientists think it's because of certain omega-3 fatty acids in fish, which can help reduce inflammation in the brain and enhance certain brain functions that are reduced in depressed people.
      </Typography>

  ]

  let panelTitles = [ "Traditional diets help prevent depression.", "Eat mostly vegetables, whole grains, fruits, nuts, beans, and seeds.", "Eat very few processed foods, fast-foods, and sweets.", "Eat more fish." ]
    
  let text = ["The evidence suggests that, rather than focusing on the superfood-of-the-week or trying to get a lot of a specific nutrient, the best approach is to focus on your whole diet. Below is a set of simple principles that, recent evidence shows, are powerful tools in preventing and reducing depression:"]

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
      <RenderParagraphs text={text} />
      <RenderDropDown panelTitles={panelTitles} panelText={panelText} />
    </RenderPaperCustom>
  )

}

// Button to exit:
// <RenderButton
// text="But what to eat?"
// onClick={props.handleClick}
// nextPage="pageOne"
// />


//exports.FoodOne = FoodOne