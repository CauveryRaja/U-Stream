import React, { Component } from 'react';

class VideoForm extends Component {
    state = {
      title: '',
      description: '',
      author: '',
      category: '',
      content: ''
    };

    onFormSubmit() {
      console.log('Form submitted...');
    }

    render() {
      return (
        <div className="video-form-container">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" name="title"/>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" name="description"/>
            </div>
            <div className="form-group">
              <label>Category</label>
              <input type="text" name="category"/>
            </div>
            <div className="form-group">
              <label>Author</label>
              <input type="text" name="author"/>
            </div>
            <div className="form-group">
              <label>Content</label>
              <input type="file" name="content"/>
            </div>
            <button>Submit</button>
          </form>
        </div>
      )
    }
}

export default VideoForm;
