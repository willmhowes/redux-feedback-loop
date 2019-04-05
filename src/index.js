import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

// reducer for storing in-progress form data
const feedbackFormReducer = (state={
   feelingRating: null,
   understandingRating: null,
   supportRating: null,
   comment: null,
}, action) => {

   // handles numeric data updates to reducer state
   if (action.type === 'UPDATE_NUMERIC_RATING') {
      return {
         ...state,
         // both the property and value are send in the payload
         [action.payload.propertyName]: action.payload.selectedOption,
      }
   }

   return state;
}

const storeInstance = createStore(
   combineReducers({
      feedbackFormReducer,
   }),
   applyMiddleware(logger),
)

ReactDOM.render(
   <Provider store={storeInstance}>
      <App />
   </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
