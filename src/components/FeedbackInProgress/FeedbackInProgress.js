import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './FeedbackInProgress.css';
import FeedbackTableComponents from '../FeedbackTableComponents/FeedbackTableComponents';

class FeedbackInProgress extends Component {

   render() {
      return (
         <section>
            <table className="FeedbackInProgress-table">
               <FeedbackTableComponents />
            </table>
         </section>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(FeedbackInProgress));
