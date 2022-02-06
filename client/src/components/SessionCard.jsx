import React from 'react';


export default class SessionCard extends React.Component {

  constructor(props) {
    super(props);

  }
//

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

