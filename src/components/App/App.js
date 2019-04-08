import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import ViewFeeling from '../ViewFeeling/ViewFeeling';
import ViewUnderstanding from '../ViewUnderstanding/ViewUnderstanding';
import ViewSupport from '../ViewSupport/ViewSupport';
import ViewComment from '../ViewComment/ViewComment';
import Home from '../Home/Home';
import ViewReview from '../ViewReview/ViewReview';

class App extends Component {

  // sends feedback to server and returns the resul
  submitFeedback = () => {
    let returnVal = axios({
      method: 'POST',
      url: '/feedback',
      data: this.props.reduxState.feedbackFormReducer,
    });

    return returnVal;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          <Route exact path="/" component={Home} />
          <Route exact path="/feeling" component={ViewFeeling} />
          <Route exact path="/understanding" component={ViewUnderstanding} />
          <Route exact path="/support" component={ViewSupport} />
          <Route exact path="/comment" component={ViewComment} />
          <Route
            exact path="/review"
            render={(props) => <ViewReview {...props}
              submitFeedback={this.submitFeedback} />}
          />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
