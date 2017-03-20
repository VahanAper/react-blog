import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li key={post.id} className="list-group-item">
          <span className="pull-xs-right">{post.categories}</span>
          <Link to={`/posts/${post.id}`}>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.all
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ fetchPosts }, dispatch);
// };

// export default connect(null, mapDispatchToProps)(PostsIndex);
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
