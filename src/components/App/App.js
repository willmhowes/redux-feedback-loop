import React, { Component } from 'react';
// import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import ViewFeeling from '../ViewFeeling/ViewFeeling';
import ViewUnderstanding from '../ViewUnderstanding/ViewUnderstanding';
import ViewSupport from '../ViewSupport/ViewSupport';
import ViewComment from '../ViewComment/ViewComment';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/feeling" component={ViewFeeling} />
        <Route exact path="/understanding" component={ViewUnderstanding} />
        <Route exact path="/support" component={ViewSupport} />
        <Route exact path="/comment" component={ViewComment} />

      </Router>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);
