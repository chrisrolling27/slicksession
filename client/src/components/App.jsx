import React from 'react';
import Session from './Session.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      addSession: false
    };

    this.makeSession = this.makeSession.bind(this);
  }

  componentDidMount() {
    console.log('App mounted');
  }

  makeSession() {
    console.log('clicked add session button');
    this.setState({ addSession: !this.state.addSession });
  }

  submitSession(e) {
    console.log(e.target.value);

  }


  render() {
    return (

      <div>
        Session cards here

        <div> {this.state.addSession ? <Session submit={this.submitSession.bind(this)}> </Session> : ''}</div>

        <div> <button className="addSessionButton" onClick={this.makeSession}> + </button> </div>
      </div>
    );
  }
}



export default App;