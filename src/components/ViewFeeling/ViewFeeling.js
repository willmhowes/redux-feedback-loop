import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FiveStepRating from '../FiveStepRating/FiveStepRating';

class ViewFeeling extends Component {
   render() {
      return (
         <div>
            <h1>How are you feeling today? </h1>
            <FiveStepRating />
         </div>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(ViewFeeling));
