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
      mySessions: [],

      columns: {
        'column-1': {
          id: 'column-1',
          title: 'Ideas',
          sessionIds: [1, 2, 3, 4],
        },
      },

      columnOrder: ['column-1']
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
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const sessions = column.sessionIds.map(sessionId => this.state.mySessions[sessionId]);
          return <Column key={column.id} column={column} sessions={this.state.mySessions} />;
        })}


        <div onKeyDown={this.keyStroke} tabIndex='0'>
          {/* <div> <Column sessions={this.state.mySessions}> </Column> </div> */}

          <div> {this.state.addSession ? <Session> </Session> : ''}</div>
          <div> <button className="addSessionButton" onClick={this.makeSession}> + </button> </div>
        </div>
      </DragDropContext>
    );
  }
}



export default App;