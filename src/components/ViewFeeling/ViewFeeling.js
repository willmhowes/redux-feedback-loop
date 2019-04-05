import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ViewFeeling extends Component {
   render() {
      return (
         <div>
            <h1>How are you feeling today? </h1>
            <input type="radio" name="oneToFive" value="1"></input>
            <label>1</label>
            <input type="radio" name="oneToFive" value="2"></input>
            <label>2</label>
            <input type="radio" name="oneToFive" value="3"></input>
            <label>3</label>
            <input type="radio" name="oneToFive" value="4"></input>
            <label>4</label>
            <input type="radio" name="oneToFive" value="5"></input>
            <label>5</label>
         </div>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(withRouter(ViewFeeling));
