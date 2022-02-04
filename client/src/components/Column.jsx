import React from 'react';
import styled from 'styled-components';
import SessionCard from './SessionCard.jsx';


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
        <Title> title from props here </Title>
        <SessionCard> Tasks go here </SessionCard>
      </Container>

    );
  }
}