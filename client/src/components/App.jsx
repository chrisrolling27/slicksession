import React from 'react'
import Session from './Session.jsx';
import SessionCard from './SessionCard.jsx';
import { DragDropContext } from 'react-beautiful-dnd';
import axios from 'axios';
import Column from './Column.jsx';


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
    // if (e.key === 'l') {
    //   this.setState({ addSession: !this.state.addSession });
    // }
  }

  onDragEnd(result) {
  //come back later. onDragStart and onDragUpdate are the other two callbacks
  }


  render() {
    return (
      <DragDropContext
        onDragEnd
      >
      <div onKeyDown={this.keyStroke} tabIndex='0'>
        <div> <Column sessions={this.state.mySessions}> </Column> </div>


        <div> {this.state.addSession ? <Session> </Session> : ''}</div>

        <div> <button className="addSessionButton" onClick={this.makeSession}> + </button> </div>
      </div>
      </DragDropContext>
    );
  }
}



export default App;