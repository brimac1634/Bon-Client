import React from "react";

import "./video.styles.scss";

const Video = ({ url }) => (
  <div className="video">
    <video
      preload="auto"
      autoPlay
      loop
      poster="https://lh3.googleusercontent.com/proxy/ELAPJK60Cy0iUYzKNPVP0HQcr0iCzc-HTZRvYmhOohOglLTyfk5e5AkFLz7pRgxcOQaObCb4QTnTbrAj3QaAvNhaY8pnVsqwbeoSi_N-sSXCTSkXsaHeaeBsmRw9J6E"
    >
      <source src={url} type="video/mp4" />
    </video>
  </div>
);
export default Video;
