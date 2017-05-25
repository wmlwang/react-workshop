import React, {Component} from 'react'
import QAComponent from './QAComponent'

class FAQComponent extends Component {
  render(){
    return(<div>
        <QAComponent question='Where am I located?' answer='Seattle, WA'/>
        <QAComponent question='What do I work in?' answer='Angular for Front End Work and Node.JS for Back End'/>
        <QAComponent question='What is my favorite restaurant?' answer='Pok Pok'/>
      </div>)
  }
}

export default FAQComponent;
