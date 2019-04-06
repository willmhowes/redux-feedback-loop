import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FiveStepRating from '../FiveStepRating/FiveStepRating';
import FeedbackInProgress from '../FeedbackInProgress/FeedbackInProgress';

class ViewSupport extends Component {

   state = {
      // name of the property stored in reduxState to be updated
      propertyName: 'supportRating',
   }

   nextView = () => {
      this.props.history.push('/comment');
   }

   render() {
      return (
         <div>
            <h1>How well are you being supported?</h1>
            <FiveStepRating propertyName={this.state.propertyName} nextView={this.nextView} />
            <FeedbackInProgress />
         </div>
      );
   }
}

export default withRouter(ViewSupport);
