import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeedbackInProgress extends Component {

   commentRender = () => {
      if (this.props.reduxState.feedbackFormReducer.comment === '') {
         return <td>skipped</td>
      } else {
         return <td>{this.props.reduxState.feedbackFormReducer.comment}</td>
      }
   }

   render() {
      return (
         <div>
            <thead>
               <tr>
                  <th>Category</th>
                  <th>Response</th>
               </tr>
            </thead>

            <tbody>
               <tr>
                  <td>Feeling</td>
                  <td>{this.props.reduxState.feedbackFormReducer.feelingRating}</td>
               </tr>
               <tr>
                  <td>Understanding</td>
                  <td>{this.props.reduxState.feedbackFormReducer.understandingRating}</td>
               </tr>
               <tr>
                  <td>Support</td>
                  <td>{this.props.reduxState.feedbackFormReducer.supportRating}</td>
               </tr>
               <tr>
                  <td>Comment</td>
                  {this.commentRender()}
               </tr>
            </tbody>

         </div>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(FeedbackInProgress);
