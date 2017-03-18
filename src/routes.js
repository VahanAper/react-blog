import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Hello = () => {
  return <h1>Hello</h1>;
};

export default (
  <Route path="/" component={App}>
    <Route path="hello" component={Hello} />
  </Route>
);
