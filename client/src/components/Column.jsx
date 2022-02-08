import React from 'react';
import styled from 'styled-components';
import SessionCard from './SessionCard.jsx';
import { Droppable } from 'react-beautiful-dnd';


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 8px;
`;
const Title = styled.h3`
  paddings: 8px;
`;
const SessionList = styled.div`
  paddings: 8px;
`;


export default class Column extends React.Component {

  render() {
    return (
      <Container>
        <Title>  {this.props.column.title} </Title>
        <SessionList>
           {this.props.sessions.map(session => <SessionCard key={session.id} session={session} /> )}
            </SessionList>
      </Container>

    )
  }
}