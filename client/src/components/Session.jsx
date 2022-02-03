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


          <textarea id="session" name="sessionText" rows="4" cols="50" onChange={this.handleChange} onSubmit={this.submitSession} defaultValue={'At JAIL you will learn how to make a website'}  >



          </textarea>







        </div>
      </div>
    );
  }
}



export default Session;