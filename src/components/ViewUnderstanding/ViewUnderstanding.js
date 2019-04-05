import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ViewUnderstanding extends Component {
   render() {
      console.log('in viewunderstanding');
      return (
         <div>
            <h1>ViewUnderstanding</h1>
         </div>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(ViewUnderstanding));
