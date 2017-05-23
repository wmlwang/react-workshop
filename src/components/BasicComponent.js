import React, {Component} from 'react'
import MyFirstComponent from './MyFirstComponent'
import MySecondComponent from './MySecondComponent'

class BasicComponent extends Component {
  render(){
    return(
      <div>
        Hi, I'm a Basic Component!
        <MyFirstComponent/>
        <MySecondComponent/>
      </div>
      )
  }
}

export default BasicComponent;
