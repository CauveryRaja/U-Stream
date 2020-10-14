import React, { Component } from 'react';

class VideoPlayer extends Component {
  render() {
    return (
      <section className="player">
        // Play Video
        <video width="600" controls>
          <source src="../../../public/defaultVideo.mp4" type="video/mp4"></source>
          Your browser does not support Video element
        </video>
      </section>
    );
  }
}

export default VideoPlayer;
