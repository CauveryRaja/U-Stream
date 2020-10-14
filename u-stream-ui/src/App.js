import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import VideoPlayer from './components/Video Player/videoPlayer';
import VideoForm from './components/Video Form/videoForm';

function App() {
  return (
    // Header, Footer, Dashboard components go here
    <header>
      <nav>
        <ul>
          <li><Link to="/play">Play Video</Link></li>
          <li><Link to="/form">Add Video</Link></li>
        </ul>
      </nav>
    </header>
    <Router>
      <div className="App">
        // Default Route
        <Route path="/">
          // Dashboard or any default component
        </Route>
        <Route path="/play">
          <VideoPlayer></VideoPlayer>
        </Route>
        <Route path="/form">
          <VideoForm></VideoForm>
        </Route>
      </div>
    </Router>
  );
}

export default App;
