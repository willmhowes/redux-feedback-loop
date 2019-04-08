import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ViewAdminTableRow from '../ViewAdminTableRow/ViewAdminTableRow';
import './ViewAdmin.css';

class ViewAdmin extends Component {

   state = {
      feedbackArray: [],
   }

   refreshAllFeedback = async () => {
      let feedbackArray = await this.props.getAllFeedback()
         .catch((error) => {
            alert('Error retrieving feedback forms, try again later');
            console.log('Error:', error);
         });

      this.setState({
         feedbackArray: feedbackArray.data,
      })
   }

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
                     <ViewAdminTableRow key={item.id} item={item} />
                  )}
               </tbody>
            </table>
         </div>
      );
   }
}

export default withRouter(ViewAdmin);
