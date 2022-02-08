import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
`;

export default class SessionCard extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Draggable draggableId={this.props.session.id} index={this.props.index}>
        {(provided) => (

          <Container
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}

          >
            {this.props.session.text} {this.props.session.date}
          </Container>
        )};
      </Draggable>
    );
  }
}

