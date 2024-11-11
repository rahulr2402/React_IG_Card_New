import './App.css';
import React from 'react';

class Card extends React.Component {
  constructor(props){
    super (props); 
    this.state = {
      followText:"Follow",
      posts: 10,
      followers: 100, 
      following: 150
    }
}

followUser =() => {
  this.state.followText === "Follow" ? this.setState({followText:"Following", followers: this.state.followers+1}) : this.setState({followText: "Follow", followers: this.state.followers-1})
}

render (){
  return <>
    <div className="profileCard">
      <img src={this.props.imgPath} alt="No Profile Pic"/>
      <div className="profileTexts">
        <div className="userNameButton">
          <h3>{this.props.userName}</h3>
          <button onClick={this.followUser}>{this.state.followText}</button>
        </div>
        <div className="followsText">
          <h3>{this.state.posts} Posts </h3>
          <h3>{this.state.followers} Followers </h3>
          <h3>{this.state.following} Following </h3>
        </div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.bio}</h3>
      </div>
    </div>
    </>
  }
}

export default Card;
