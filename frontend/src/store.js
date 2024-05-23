import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Optional, for handling asynchronous actions
import { composeWithDevTools } from 'redux-devtools-extension'; // Optional, for Redux DevTools extension

import { userReducer } from './reducers/userReducer'; // Import your userReducer

// Create the Redux store with just one reducer
const store = createStore(
  userReducer, // Pass the userReducer directly
  composeWithDevTools(applyMiddleware(thunk)) // Enhance store with middleware and Redux DevTools extension
);

export default store;

