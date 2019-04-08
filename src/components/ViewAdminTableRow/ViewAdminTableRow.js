import React, { Component } from 'react';

class ViewAdmin extends Component {

   state = {
      feedbackArray: [],
   }

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
            <td><button>Delete</button></td>
         </tr>
      );
   }
}

export default ViewAdmin;
