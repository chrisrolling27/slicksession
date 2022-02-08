import React from 'react'
import Session from './Session.jsx';
import SessionCard from './SessionCard.jsx';
import { DragDropContext } from 'react-beautiful-dnd';
import axios from 'axios';
import Column from './Column.jsx';
//import initialData from '../src/initialData.js';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      addSession: false,
      mySessions: [],

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
    // <div onKeyDown={this.keyStroke} tabIndex='0'> </div>
    // if (e.key === 'l') {
    //   this.setState({ addSession: !this.state.addSession });
    // }
  }

  onDragEnd(result) {
    //come back later. onDragStart and onDragUpdate are the other two callbacks
  }


  render() {
    return (
      <div>

        {/* {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const sessions = column.sessionIds.map(sessionId => this.state.mySessions[sessionId]);
          return <Column key={column.id} column={column} sessions={this.state.mySessions} />;
        })} */}

        {this.state.addSession ? <Session> </Session> : ''}

        <div> <button className="addSessionButton" onClick={this.makeSession}> + </button> </div>

      </div>
    );
  }
}



export default App;