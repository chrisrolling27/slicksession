import React from 'react';
import Session from './Session.jsx';
import SessionCard from './SessionCard.jsx';
import axios from 'axios';
import TextEditor from './TextEditor.jsx';

//import { Value } from 'slate';


class App extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      addSession: false,
      mySessions: []
    };

    this.makeSession = this.makeSession.bind(this);
    this.keyStroke = this.keyStroke.bind(this);
  }

  componentDidMount() {
    axios.get('/sessions').then((response) => {
      this.setState({ mySessions: response.data })
    })
  }

  makeSession() {
    this.setState({ addSession: !this.state.addSession });
  }

  keyStroke(e) {
    if (e.key === 'Enter') {
      this.setState({ addSession: !this.state.addSession });
    }
  }

  render() {
    return (

      <div onKeyDown={this.keyStroke} tabIndex='0'>
        <div> {this.state.mySessions.map((sesh) => <SessionCard session={sesh} key={sesh.id}> </SessionCard>)} </div>

        <div> {this.state.addSession ? <Session > </Session> : ''}</div>

        <div > <button className="addSessionButton" onClick={this.makeSession}> + </button> </div>
      </div>

    );
  }
}



export default App;