import React from 'react';
import Session from './Session.jsx';
import SessionCard from './SessionCard.jsx';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      addSession: false,
      mySessions: []
    };

    this.makeSession = this.makeSession.bind(this);
  }

  componentDidMount() {
    console.log('App mounted');
    axios.get('/sessions').then((response) => {
      this.setState({ mySessions: response.data })
    })
  }

  makeSession() {
    console.log('clicked add session button');
    this.setState({ addSession: !this.state.addSession });
  }

  keyStroke(e) {
    console.log(e.keyCode);
  }

//
  render() {
    return (

      <div onKeyDown={this.keyStroke}>
        <div > {this.state.mySessions.map((sesh) => <SessionCard session={sesh} key={sesh.id}> </SessionCard>)} </div>

        <div> {this.state.addSession ? <Session > </Session> : ''}</div>

        <div > <button className="addSessionButton"  onClick={this.makeSession}> + </button> </div>
      </div>
    );
  }
}



export default App;