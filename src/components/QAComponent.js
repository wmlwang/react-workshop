import React, {Component} from 'react'

class QAComponent extends Component {
  render(){
    return(<div>
        <p style={{'font-weight':'bold'}}>{this.props.question}</p>
        <p>{this.props.answer}</p>
      </div>)
  }
}

export default QAComponent;
