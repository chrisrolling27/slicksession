import React from 'react';


class Session extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      sessionText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitSession = this.submitSession.bind(this);
  }

  handleChange(e) {
    this.setState({ sessionText: e.target.value })
  }

  submitSession(e) {
    console.log(this.state.sessionText);

  }

  render() {
    return (
      <div>
        <div className="sessionAdder">

          <form onSubmit={this.submitSession2}>
            <label>
              Meeting notes here:
              <input type="text" name="sessionText" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>

        </div>
      </div>
    );
  }
}



export default Session;