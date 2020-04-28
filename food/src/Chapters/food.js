import React from 'react';
import { Typography } from "@material-ui/core";
import RenderButton from '../components/Button';
import RenderPaper from '../components/Paper';
import RenderPaperCustom from '../components/PaperCustom';
import RenderDropDown from '../components/DropDown';
import '../App.css'

export default class Food extends React.Component {
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
      pageOne: <FoodOne handleClick={this.updatePage} />,
      pageTwo: <FoodTwo handleClick={this.updatePage} />,
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

  let panelTitles3 = ["What about mercury?", "What about fish oil?"]
  let panelText3= [ 
    <Typography>
      <Typography paragraph='true'>It's true that many fish are very high in mercury, a chemical that's harmful to humans. But there are lots of delicious fish that are much lower in mercury, such as salmon, shrimp, sardines, tilapia, cod, catfish, scallops, and clam. Larger fish, like swordfish, shark, and albacore tuna (light tuna is lower) are higher in mercury and should be eaten less.</Typography>

      Want to know if your favorite fish is low mercury? Check out a complete listing <a href='http://www.fda.gov/Food/FoodborneIllnessContaminants/Metals/ucm115644.htm' target='_blank' rel='noopener'>here</a>.
    </Typography>,
    <Typography>
      There's some evidence that fish oil supplements are helpful for depression as well, but there's more evidence for eating actual fish. Scientists theorize that the other nutrients in fish, not present in the oil, may also play a role, and enhance the anti-depressive effect. But, if you don't actually like fish, fish oil may be a good option!	
    </Typography>

  ]

  let panelText = [
      <Typography>
        Traditional diets (such as Mediterranean, Scandinavian, and Japanese) have been shown to help prevent depression. Researchers believe that this is because they rely on a wide variety of minimally-processed foods and fish.
        <br/>
        "Traditional diets" means diets that existed before the modern American diet.
      </Typography>,
      <Typography>
        Alright, of course, everyone knows these things are healthy for you. The point here is to make sure that these make up <em>most</em> of your diet, which leads us to the third principle:
      </Typography>,
      <Typography className="winkAfter">
        I'm sure this isn't a big surprise either. A significant amount of fast food, commercially produced baked goods, white breads, and sweets in the diet all make depression more likely. All of these things tend to increase brain inflammation and reduce many types of brain function, both of which are associated with depression. (Of course, we wouldn't deny that some chocolate in moderation can be a powerful mood booster.) 
      </Typography>,
      <Typography>
        <Typography paragraph='true'>Funnily enough, there's a lot of evidence that including a lot of fish in your diet helps prevent depression. Scientists think it's because of certain omega-3 fatty acids in fish, which can help reduce inflammation in the brain and enhance certain brain functions that are reduced in depressed people.</Typography>
        <RenderDropDown panelText={panelText3} panelTitles={panelTitles3}/>
      </Typography>,
      <Typography>
        Actually, lowering meat intake hasn't been shown to help with depression. In fact, diets that recommend low meat intake, only eating lean meat, low-cholesterol diets, and diets that focus on weight loss have been found not to reduce depression. This probably doesn't mean you should have steak for dinner every night. Some evidence suggests that eating either a lot of meat or very little meat may both increase your risk for depression. As with so many things, moderation may be the best course.
      </Typography>
  ]

  let panelTitles = [ "Traditional diets help prevent depression.", "Eat mostly vegetables, whole grains, fruits, nuts, beans, and seeds.", "Eat very few processed foods, fast-foods, and sweets.", "Eat more fish.", "What about meat?" ]
    
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
      <Typography paragraph='true'>The evidence suggests that, rather than focusing on the superfood-of-the-week or trying to get a lot of a specific nutrient, the best approach is to focus on your whole diet. Below is a set of simple principles that, recent evidence shows, are powerful tools in preventing and reducing depression:</Typography>
      <RenderDropDown panelTitles={panelTitles} panelText={panelText} />
    </RenderPaperCustom>
  )

}

//exports.FoodOne = FoodOne