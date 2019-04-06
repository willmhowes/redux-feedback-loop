import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './FeedbackInProgress.css';

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
         <section>
            <table className="FeedbackInProgress-table">
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
            </table>
         </section>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(FeedbackInProgress));
