import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import config from '../../secret/firebase.client.json';

import { loadCurrentUser } from './action-creators/user';
import { loadBoard } from './action-creators/board';

/***** REDUCERS *****/
import rootReducer from './reducers';

// react-redux-firebase options
const rrfConfig = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
}

/***** STORE *****/
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware.withExtraArgument(getFirebase) // allows our thunks to have access to getFirebase
//      createLogger({ collapsed: true })
    ),
    reactReduxFirebase(config.firebase, { rrfConfig })
  )
);

export default store;

store.dispatch(loadCurrentUser());
store.dispatch(loadBoard());
