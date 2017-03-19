import { combineReducers } from 'redux';

import PostsReducer from './PostsReducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer
});

export default rootReducer;
