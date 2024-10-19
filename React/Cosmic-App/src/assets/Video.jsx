import React from 'react';

const Video = () => {
  return (
    <div className="loop">
      <video
        autoPlay=""
        muted=""
        loop=""
        id="myVideo"
      >
        <source src="tara_highlight_2 (1080p).mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h2>
          <span id="tx">we are</span>
          <br />
          A FULL-SERVICE
          <br />
          EVENT PLANNING
          <br />
          AND DESIGN COMPANY
        </h2>
      </div>
    </div>
  );
};

export default Video;