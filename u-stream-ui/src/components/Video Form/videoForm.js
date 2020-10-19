import React, { Component } from 'react';

class VideoForm extends Component {
    state = {
      title: '',
      description: '',
      author: '',
      category: '',
      content: ''
    };

    constructor() {
        super();
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFileSelect = this.onFileSelect.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onFileSelect(event) {
        let files = event.target.files;
        const reader = new FileReader();
        reader.readAsBinaryString(files[0]);
        reader.addEventListener('load', (event) => {
            const result = event.target.result;
            this.setState({
                content: result
            });
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        console.log('Form submitted...', this.state);
    }

    render() {
      return (
        <div className="video-form-container">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" name="title" onChange={this.onFieldChange}/>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input type="text" name="description" onChange={this.onFieldChange}/>
            </div>
            <div className="form-group">
              <label>Category</label>
              <input type="text" name="category" onChange={this.onFieldChange}/>
            </div>
            <div className="form-group">
              <label>Author</label>
              <input type="text" name="author" onChange={this.onFieldChange}/>
            </div>
            <div className="form-group">
              <label>Content</label>
              <input type="file" name="content" accept=".mp4, .avi" onChange={this.onFileSelect}/>
            </div>
            <button>Submit</button>
          </form>
        </div>
      )
    }
}

export default VideoForm;
