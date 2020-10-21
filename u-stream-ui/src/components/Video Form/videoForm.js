import React, { Component } from 'react';

class VideoForm extends Component {
    state = {
        formData: new FormData()
    };

    constructor() {
        super();
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFileSelect = this.onFileSelect.bind(this);
    }

    onFieldChange(event) {
        let form = this.state.formData;
        form.set(event.target.name, event.target.value)
        this.setState({
            formData: form
        });
    }

    onFileSelect(event) {
        let form = this.state.formData;
        form.set(event.target.name, event.target.files[0])
        this.setState({
            formData: form
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        fetch('/upload', {
            method: 'POST',
            body: this.state.formData
        })
        .then(res => console.log(res));
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
              {/*<label>Content</label>*/}
              <input type="file" name="selectedFile" accept=".mp4, .avi" onChange={this.onFileSelect}/>
            </div>
            <button>Submit</button>
          </form>
        </div>
      )
    }
}

export default VideoForm;
