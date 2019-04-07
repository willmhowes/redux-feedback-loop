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
      let response = await this.props.submitFeedback();

      if (response.status === 201) {
         console.log('response', response);
         this.setState({
            is_submitted: true,
         })
      } else {
         alert('error adding feedback, please try again later');
         console.log('error:', response);
      }

   }

   handleView = () => {

      if (this.state.is_submitted === true) {
         return (
            <div>
               <h1>submission successful</h1>
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
