import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ViewReview.css';
import FeedbackTableComponents from '../FeedbackTableComponents/FeedbackTableComponents';

class ViewReview extends Component {

   handleSubmit = () => {
      
   }

   render() {
      return (
         <div>
            <h1>Review Feedback</h1>
            <table className="ViewReview-table">
               <FeedbackTableComponents />
            </table>
            <button onClick={this.handleSubmit}>Submit</button>
         </div >
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(ViewReview));
