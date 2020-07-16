import React, { Component } from 'React'

class Form extends Component {
  constructor(props){
    super(props){
      this.state = {
        username: '',
        comments: '',
        topic: 'react'
      }
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handleCommentChange = (event) => {
    this.setState({
      comments: event.target.value
    });
  }

  handleTopicChange = (event) => {
    this.SetState({
      topic: event.target.value
    });
  }

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.topic} ${this.state.comments}`)
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form">
          <h1>Username:</h1>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div className="comments">
          <h1>Comments:</h1>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentChange}
          >
          </textarea>
        </div>
        <div className="select">
          <h1>Topic:</h1>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
