import React from "react";
import ReactPlayer from "react-player";

import "./video.styles.scss";

const Video = ({ url, setLoading }) => (
  <div className="video">
    <ReactPlayer
      url={url}
      playing
      loop
      playsinline
      width="100%"
      height="100%"
      onReady={() => setLoading(false)}
    />
  </div>
);
export default Video;
