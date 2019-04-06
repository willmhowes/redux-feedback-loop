import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ViewReview extends Component {

   nextView = () => {
      this.props.history.push('/understanding');
   }

   render() {
      return (
         <div>
            <h1>Review Feedback</h1>
         </div>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(ViewReview));
