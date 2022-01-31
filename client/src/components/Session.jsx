import React from 'react';
import axios from 'axios';

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
    axios.post('/session', {
      text: this.state.sessionText
    })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="sessionAdder">

          <form onSubmit={this.submitSession}>
            <label>

              <input type="text" required name="sessionText" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>

        </div>
      </div>
    );
  }
}



export default Session;