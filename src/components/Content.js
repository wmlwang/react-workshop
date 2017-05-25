import React, {Component} from 'react'
import ContentDescription from './ContentDescription'
import FAQComponent from './FAQComponent'
import QuoteComponent from './contentComponents/QuoteComponent'

class Content extends Component {
  render(){
    return(<div>
        <h1> Home </h1>
        <br></br> 
        <ContentDescription content="Hi, I'm William. Software Developer."/>
        <FAQComponent/>
        <ContentDescription content="My approach to software development is to "/>
        <br></br>  
        <QuoteComponent quote="Quote goes here" source="Source goes here"/>
      </div>)
  }
}

export default Content;
