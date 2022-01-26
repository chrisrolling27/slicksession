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



  render() {
    return (

      <div>
        Session cards here

        <div> {this.state.addSession ? <Session > </Session> : ''}</div>

        <div> <button className="addSessionButton" onClick={this.makeSession}> + </button> </div>
      </div>
    );
  }
}



export default App;