import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentWillMount() {
    console.log(this.props.fetchPosts());
  }

  render() {
    return (
      <h1>Posts index page</h1>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ fetchPosts }, dispatch);
// };

// export default connect(null, mapDispatchToProps)(PostsIndex);
export default connect(null, { fetchPosts })(PostsIndex);
