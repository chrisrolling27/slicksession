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
        {this.props.session.text}
        {this.props.session.date}
        </div>
      </div>
    );
  }
}



export default SessionCard;