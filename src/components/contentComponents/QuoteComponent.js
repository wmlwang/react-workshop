import React, {Component} from 'react'

class QuoteComponent extends Component {
  render(){
    return(<div>
        {this.props.quote}
        <i> {this.props.source} </i>
      </div>)
  }
}

export default QuoteComponent;
