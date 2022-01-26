import React from 'react';


class Session extends React.Component {

  constructor(props) {
    super(props);


    this.state = {

    };

    //this.onChange = this.onChange.bind(this);
  }





  render() {
    return (

      <div>
        <div className="sessionAdder">

          <form>
            <label>
              Meeting notes here:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>

        </div>
      </div>
    );
  }
}



export default Session;