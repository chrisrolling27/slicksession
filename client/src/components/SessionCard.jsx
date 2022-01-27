import React from 'react';


class SessionCard extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      sessionText: ''
    };


  }


  render() {
    return (
      <div>
        <div className="sessionCard">
        Hello Imma sessionCard

        </div>
      </div>
    );
  }
}



export default SessionCard;