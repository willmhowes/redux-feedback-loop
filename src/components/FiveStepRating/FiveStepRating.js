import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FiveStepRating.css';

class FiveStepRating extends Component {

   state = {
      selectedOption: null,
   }

   handleSubmit = (event) => {
      event.preventDefault();

   }

   handleRadioUpdate = (event) => {
      this.setState({
         selectedOption: event.target.value,
      })
   }

   render() {
      console.log('in viewunderstanding');
      return (
         <form className="fiveStepRating-radioForm" onSubmit={this.handleSubmit}>
            {JSON.stringify(this.state.selectedOption)}
            <div className="fiveStepRating-radio" onClick={this.handleRadioUpdate}>
               <input type="radio" name="oneToFive" value="1"></input>
               <br />
               <label>1</label>
            </div>
            <div className="fiveStepRating-radio" onClick={this.handleRadioUpdate}>
               <input type="radio" name="oneToFive" value="2"></input>
               <br />
               <label>2</label>
            </div>
            <div className="fiveStepRating-radio" onClick={this.handleRadioUpdate}>
               <input type="radio" name="oneToFive" value="3"></input>
               <br />
               <label>3</label>
            </div>
            <div className="fiveStepRating-radio" onClick={this.handleRadioUpdate}>
               <input type="radio" name="oneToFive" value="4"></input>
               <br />
               <label>4</label>
            </div>
            <div className="fiveStepRating-radio" onClick={this.handleRadioUpdate}>
               <input type="radio" name="oneToFive" value="5"></input>
               <br />
               <label>5</label>
            </div>
            <button type="submit">Submit</button>
         </form>
      );
   }
}

const mapReduxStateToProps = reduxState => ({
   reduxState
});

export default connect(mapReduxStateToProps)(FiveStepRating);
