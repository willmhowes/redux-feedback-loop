import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';

class Home extends Component {

   linkToViewFeeling = () => {
      this.props.history.push('/feeling');
   }

   render() {
      return (
         <div className="center">
            <button onClick={this.linkToViewFeeling}>Begin Feedback</button>
         </div>
      );
   }
}

export default withRouter(Home);
