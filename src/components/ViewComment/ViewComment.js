import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ViewComment extends Component {

   state = {
      comment: null,
   }

   render() {
      return (
         <div>
            <h1>Any comments you want to leave?</h1>


            <form onSubmit={}>
               <textarea cols="60" rows="10"></textarea>
               <button>Submit</button>
            </form>
         </div>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(ViewComment));
