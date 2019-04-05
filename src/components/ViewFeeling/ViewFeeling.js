import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewFeeling extends Component {
   render() {
      return (
         <div className="App">

         </div>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(ViewFeeling);
