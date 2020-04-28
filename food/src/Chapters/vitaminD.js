import React from 'react';
import { Typography } from "@material-ui/core";
import RenderButton from '../components/Button';
import RenderPaper from '../components/Paper';
import RenderPaperCustom from '../components/PaperCustom';
import RenderDropDown from '../components/DropDown';
import RenderImage from '../components/Image';

export default class VitaminD extends React.Component {
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
      pageOne: <DOne handleClick={this.updatePage} />,
      pageTwo: <DTwo handleClick={this.updatePage} />,
      pageThree: <DThree handleClick={this.done} />
    }

    let pageToRender = pages[this.state.page]

    return(
      <div>
        {pageToRender}
      </div>
    )
  }



}


function DOne(props) {

  let text = ["Research has found that Vitamin D deficiency may be a common, hidden cause of depression. Though some vitamin D comes from our diets, the vast majority comes from sun exposure, and in modern times many people are deficient."]
  function choice() {
    return(
      <RenderButton
        text="Learn More"
        onClick={props.handleClick}
        nextPage="pageTwo"
      />
    )
  }
  
  return(
    <RenderPaper
      imageAddress={require('./assets/sun_melissa-askew-unsplash.jpg')}
      text={text} 
      choice={choice}
    />
  )

}

function DTwo(props) {

  let text = ["Recent research has found that this deficiency is very commmon; 40% of people in the US, and 70-80% of people with darker skin! In fact, some research suggests that a significant proportion of depression may actually be due to vitamin D deficiency.", <Typography variant='caption'><a href='https://doi.org/10.1016/j.nutres.2010.12.001' target='_blank' rel='noopener'>See Research</a></Typography>]
  // https://www.ncbi.nlm.nih.gov/pubmed/21310306

  function choice() {
    return(
      <RenderButton
        text="Get me some D!"
        onClick={props.handleClick}
        nextPage="pageThree"
      />
    )
  }
  
  return(
    <RenderPaper
      imageAddress={require('./assets/sun_hear_mayur-gala-unsplash.jpg')}
      text={text} 
      choice={choice}
    />
  )

}

function DThree(props) {

  let panelText = [
      <Typography>
				To get your vitamin D for the day, you need to expose your skin to the sun directly, without sunscreen or glass in-between. Any part of your body will do; the more you expose, the faster you get vitamin D.

        Of course, you don't want to get burnt; too much sun will increase your risk for skin cancer. A good guideline is to expose your skin for about half the amount of time it takes you to burn.

        People who burn more slowly also absorb vitamin D more slowly. Because of this, at noon in summer, a pale-skinned person might get all the exposure they need in under 10 minutes; for someone with dark-brown skin, it might take an hour. And in winter, the time needed increases for everyone.
      </Typography>,
      <Typography>
				There are dietary sources of vitamin D; mainly fatty seafood. Some seafood with the highest vitamin D levels:

          <ul>
            <li>Salmon</li>
            <li>Herring</li>
            <li>Sardines</li>
            <li>Mackerel</li>
            <li>Halibut</li>
          </ul>
        Most of these are high in Omega 3's as well, also shown to be powerful protection from depression!

        If fish isn't your thing, egg yolks (particularly from free-range chickens) or mushrooms are other sources, or you can drink fortified milk, or take supplements. You can also get your vitamin D levels tested by your doctor.

        Don't overdo it with supplementation; excess levels of many vitamins can do more harm than good.
      </Typography>

  ]

  let panelTitles = [ "Sunlight", "Diet" ]
    

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
      <RenderImage imageAddress={require('./assets/sun_shutterstock_690012241.jpg')} />
      <Typography paragraph='true'>Where to get your vitamin D? Read below!</Typography>
      <RenderDropDown panelTitles={panelTitles} panelText={panelText} />
    </RenderPaperCustom>
  )

}

//exports.FoodOne = FoodOne

//learn how to set up exports
//exports.FoodPageOne = FoodPageOne