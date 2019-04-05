import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FiveStepRating from '../FiveStepRating/FiveStepRating';

class ViewFeeling extends Component {

   state = {
      // name of the property stored in reduxState to be updated
      propertyName: 'feelingRating',
   }

   render() {
      return (
         <div>
            <h1>How are you feeling today? </h1>
            <FiveStepRating propertyName={this.state.propertyName} />
         </div>
      );
   }
}

export default withRouter(ViewFeeling);
