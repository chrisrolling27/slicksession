import React from 'react';
import Session from './Session.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      showSession: false
    };

    this.makeSession = this.makeSession.bind(this);
  }

  componentDidMount() {
    console.log('App mounted');
  }

  makeSession() {
    console.log('clicked add session button');
    this.setState({showSession: !this.state.showSession});
  }

  //ternary/terciary to show the add session component
  render() {
    return (

      <div>
        Hello world!

      <div> <Session> </Session> </div>

        <div> <button className="addSession" onClick={this.makeSession}> + </button> </div>
      </div>
    );
  }
}



export default App;