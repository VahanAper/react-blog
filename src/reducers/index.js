import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './PostsReducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
