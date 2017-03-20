import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const {
      handleSubmit,
      fields: { title, categories, content }
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="title">Title</label>
          <input {...title} className="form-control" type="text" id="title" />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="categories">Categories</label>
          <input {...categories} className="form-control" type="text" id="categories" />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="content">Content</label>
          <textarea {...content} className="form-control" type="text" id="content" />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button className="btn btn-primary" type="submit">Save</button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title.';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories.';
  }
  if (!values.content) {
    errors.content = 'Enter the content.';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
