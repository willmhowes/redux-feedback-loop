import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FiveStepRating.css';

class FiveStepRating extends Component {

   state = {
      // the radio input currently selected
      selectedOption: null,
   }

   // sends an object containing update info to reduxState
   handleSubmit = (event) => {
      event.preventDefault();

      // basic form validation
      if (this.state.selectedOption === null) {
         alert('Please select a rating');
      } else {
         // creates an object for reduxState containing a property and the value to update it with
         const objectToSend = {
            selectedOption: this.state.selectedOption,
            propertyName: this.props.propertyName,
         };

         // sends the object to the reduxState to be parsed
         const action = { type: 'UPDATE_NUMERIC_RATING', payload: objectToSend}
         this.props.dispatch(action);
         // Components should prop-share a function that links to the next view
         this.props.nextView();
      }
   }

   // Saves the current selected radio in state
   handleRadioUpdate = (event) => {
      this.setState({
         selectedOption: event.target.value,
      })
   }

   render() {
      return (
         <form className="fiveStepRating-radioForm" onSubmit={this.handleSubmit}>
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
