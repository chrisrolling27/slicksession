import React from 'react';
import Session from './Session.jsx';

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


  //ternary/terciary to show the add session component
  render() {
    return (

      <div>
        Hello world
      </div>
    );
  }
}



export default App;