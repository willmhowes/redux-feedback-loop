import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ViewAdminTableRow from '../ViewAdminTableRow/ViewAdminTableRow';
import './ViewAdmin.css';

class ViewAdmin extends Component {

   state = {
      feedbackArray: [],
   }

   // Refresh the list of feedback entries
   // If desired, could be attached to a button for manual refreshing
   refreshAllFeedback = () => {
      this.props.getAllFeedback()
         .then((response) => {
            this.setState({
               feedbackArray: response.data,
            });
         }).catch((error) => {
            alert('Error retrieving feedback forms, try again later');
            console.log('Error:', error);
         });
   }

   // GET request returns updated feedback list
   componentDidMount = () => {
      this.refreshAllFeedback();
   }

   render() {
      return (
         <div>
            <table className="ViewAdmin-table">
               <thead>
                  <tr>
                     <th>Feeling</th>
                     <th>Comprehension</th>
                     <th>Support</th>
                     <th>Comments</th>
                     {/* <th>Flagged?</th> */}
                     <th>Date</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {this.state.feedbackArray.map(item =>
                     <ViewAdminTableRow key={item.id}
                        item={item} refreshAllFeedback={this.refreshAllFeedback}
                        deleteFeedbackEntry={this.props.deleteFeedbackEntry} />
                  )}
               </tbody>
            </table>
         </div>
      );
   }
}

export default withRouter(ViewAdmin);
