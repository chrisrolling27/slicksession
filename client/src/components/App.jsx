import React from 'react'
import SessionAdder from './SessionAdder.jsx';
import SessionCard from './SessionCard.jsx';
import { DragDropContext } from 'react-beautiful-dnd';
import axios from 'axios';
import Column from './Column.jsx';
import initialData from './initialData';


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = initialData;

    this.makeSession = this.makeSession.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
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
    // this.keyStroke = this.keyStroke.bind(this);
    // <div onKeyDown={this.keyStroke} tabIndex='0'> </div>
    // if (e.key === 'l') {
    //   this.setState({ addSession: !this.state.addSession });
    // }
  }

  onDragEnd(result) {

    const { destination, source, draggableId } = result;

    console.log(source.draggableId);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId && destination.index === source.index
    ) {
      return;
    }
    //todo: change for multi columns
    const column = this.state.columns[source.droppableId];
    const newSessionIds = Array.from(column.sessionIds);
    newSessionIds.splice(source.index, 1);
    newSessionIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      sessionIds: newSessionIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };


    this.setState(newState);
  };


  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>

          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const sessions = column.sessionIds.map(sessionId => this.state.sessions[sessionId]);

            return <Column key={column.id} column={column} sessions={sessions} />;
          })}
        </DragDropContext>

        {this.state.addSession ? <SessionAdder> </SessionAdder> : ''}
        <button className="addSessionButton" onClick={this.makeSession}> + </button>
      </div>
    )
  };
};