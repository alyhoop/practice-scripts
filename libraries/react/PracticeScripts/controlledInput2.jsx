class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  this.onChange = this.onChange.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }

onChange(event) {
  this.setState({input: event.target.value});
}

handleChange(event) {
    this.setState({input: event.target.value + this.state.input});
}

  render() {
    return (
      <div>
        <input
        value={this.state.input}
        onChange={this.handleChange}
         />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
