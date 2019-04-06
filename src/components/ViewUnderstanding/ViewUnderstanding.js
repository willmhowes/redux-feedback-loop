import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FiveStepRating from '../FiveStepRating/FiveStepRating';
import FeedbackInProgress from '../FeedbackInProgress/FeedbackInProgress';

class ViewUnderstanding extends Component {

   state = {
      // name of the property stored in reduxState to be updated
      propertyName: 'understandingRating',
   }

   nextView = () => {
      this.props.history.push('/support');
   }

   render() {
      return (
         <div>
            <h1>How well are you understanding the content?</h1>
            <FiveStepRating propertyName={this.state.propertyName} nextView={this.nextView} />
            <FeedbackInProgress />
         </div>
      );
   }
}

export default withRouter(ViewUnderstanding);
