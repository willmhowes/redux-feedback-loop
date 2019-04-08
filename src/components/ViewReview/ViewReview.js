import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './ViewReview.css';
import FeedbackTableComponents from '../FeedbackTableComponents/FeedbackTableComponents';

class ViewReview extends Component {

   state = {
      is_submitted: false,
   }

   handleSubmit = () => {
      // activate submission function, save response in variable
      this.props.submitFeedback()
      .then(() => {
         // Updates DOM to show successful submission
         this.setState({
            is_submitted: true,
         })
         // resets the feedbackFormReducer in reduxState
         let action = { type: 'RESET_FEEDBACK' };
         this.props.dispatch(action);
      })
      .catch((error) => {
         alert('error adding feedback, please try again later');
         console.log('error:', error);
      });
   }

   // Renders either:
   // 1) a preview of submission contents
   // 2) an indication of a successful submission
   handleView = () => {
      if (this.state.is_submitted === true) {
         return (
            <div>
               <h2>Your submission was successful</h2>
               <Link to="/">Home</Link>
            </div>
         );
      } else {
         return (
            <div>
               <h1>Review Feedback</h1>
               <table className="ViewReview-table">
                  <thead>
                     <tr>
                        <th>Category</th>
                        <th>Response</th>
                     </tr>
                  </thead>
                  <FeedbackTableComponents />
               </table>
               <button onClick={this.handleSubmit}>Submit</button>
            </div>
         )
      }
   }

   render() {
      return (
         <>{this.handleView()}</>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(ViewReview));
