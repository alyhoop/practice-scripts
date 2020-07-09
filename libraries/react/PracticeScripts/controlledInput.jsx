class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
   }

    handleChange(event) {
      this.setState({
         input: event.target.value
      })
    };

    onChange(event) {
    this.setState({
      input: event.target.value + this.state.input
      });
   }

  render() {
    return (
      <div>
     <form>
        <label>
          <textarea
            value={this.state.input}
            onChange={this.handleChange} />
        </label>
      </form>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
