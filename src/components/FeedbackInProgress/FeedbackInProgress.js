import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class FeedbackInProgress extends Component {
   render() {
      return (
         <section className="FeedbackInProgress-section">
            <h2>This is where the feedback in progress will display</h2>
         </section>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(FeedbackInProgress));
