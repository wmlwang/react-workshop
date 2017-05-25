import React, {Component} from 'react'
import '../App.css';
import profileImage from './profileImage.svg';

class ProfileCard extends Component {
  render(){
    return(<div>
      <img src={profileImage}/>
      <h1> William Wang </h1>
      <p> A Dev who likes to run and play tennis.</p>
      </div>)
  }
}

export default ProfileCard;
