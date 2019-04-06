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

   nextView = () => {
      this.props.history.push('/review');
   }

   handleSubmit = (event) => {
      event.preventDefault();

      if(this.state.comment === '') {
         alert('Please enter a comment, or click the skip button');
      } else {
         const action = { type: 'ADD_COMMENT_FEEDBACK', payload: this.state.comment };
         this.props.dispatch(action);
         this.nextView();
      }
   }

   skipComment = () => {
      const action = { type: 'ADD_COMMENT_FEEDBACK', payload: '' };
      this.props.dispatch(action);
      this.nextView();
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
               <button type="submit">Submit</button>
               <button type="button" onClick={this.skipComment}>Skip</button>
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
