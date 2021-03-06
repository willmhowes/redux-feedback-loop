import React, { Component } from 'react';

class ViewAdmin extends Component {

   state = {
      feedbackArray: [],
   }

   // Confirms deletion request
   confirmDelete = () => {
      let result = window.confirm('Are you sure you want to delete this feedback entry?');
      if (result === true) {
         this.deleteItem();
      }
   }

   // Sends delete request, renders page upon completion
   deleteItem = () => {
      this.props.deleteFeedbackEntry(this.props.item.id)
      .then(() => {
         this.props.refreshAllFeedback();
      }).catch((error) => {
         alert('error deleting feedback entry, please try again later');
         console.log('error:', error);
      });
   }

   // Formats the date from the database into a human-readable string
   formatDate = () => {
      let date = new Date(this.props.item.date);
      // console.log(date);
      date = date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      return date;
   }

   render() {
      return (
         <tr>
            <td>{this.props.item.feeling}</td>
            <td>{this.props.item.understanding}</td>
            <td>{this.props.item.support}</td>
            <td>{this.props.item.comments}</td>
            {/* <td>{this.props.item.flagged}</td> */}
            <td>{this.formatDate()}</td>
            <td><button onClick={this.confirmDelete}>Delete</button></td>
         </tr>
      );
   }
}

export default ViewAdmin;
