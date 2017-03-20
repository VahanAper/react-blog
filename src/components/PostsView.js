import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPost, deletePost } from '../actions';

class PostsView extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDelete() {
    this.props.deletePost(this.props.post.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <button onClick={this.onDelete.bind(this)} className="btn btn-danger pull-xs-right">Delete post</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  };
};

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsView);
