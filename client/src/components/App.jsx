import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      counter: 42
    };

    //this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    console.log('App mounted');
  }

  render() {
    return (

      <div>
        Hello world
      </div>
    );
  }
}



export default App;