import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './ViewReview.css';
import FeedbackTableComponents from '../FeedbackTableComponents/FeedbackTableComponents';

class ViewReview extends Component {

   state = {
      is_submitted: false,
   }

   handleSubmit = async () => {
      // activate submission function, save response in variable
      let response = await this.props.submitFeedback()
      .catch((error) => {
         alert('error adding feedback, please try again later');
         console.log('error:', error);
      });

      // Checks if submission was successful
      if (response.status === 201) {
         // Updates DOM to show successful submission
         this.setState({
            is_submitted: true,
         })
         // resets the feedbackFormReducer in reduxState
         let action = { type: 'RESET_FEEDBACK' };
         this.props.dispatch(action);
      } else {
         alert('error adding feedback, please try again later');
         console.log('error:', response);
      }

   }

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
