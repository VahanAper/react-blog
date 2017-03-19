import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    const {
      handleSubmit,
      fields: { title, categories, content }
    } = this.props;
    
    return (
      <form onSubmit={handleSubmit}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input {...title} className="form-control" type="text" id="title" />
        </div>

        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <input {...categories} className="form-control" type="text" id="categories" />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea {...content} className="form-control" type="text" id="content" />
        </div>

        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
