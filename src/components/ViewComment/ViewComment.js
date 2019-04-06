import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FeedbackInProgress from '../FeedbackInProgress/FeedbackInProgress';

class ViewComment extends Component {

   state = {
      comment: '',
   }

   handleChange = (event) => {
      this.setState({
         comment: event.target.value,
      });
   }

   handleSubmit = (event) => {
      event.preventDefault();
      const action = { type: 'ADD_COMMENT_FEEDBACK', payload: this.state.comment };
      this.props.dispatch(action);
   }

   render() {
      return (
         <div>
            <h1>Any comments you want to leave?</h1>

            <form onSubmit={this.handleSubmit}>
               <textarea cols="60" rows="10"
                  name="comment"
                  onChange={this.handleChange}
                  value={this.state.comment}>
               </textarea>
               <br />
               <button>Submit</button>
            </form>
            <FeedbackInProgress />
         </div>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(ViewComment));
