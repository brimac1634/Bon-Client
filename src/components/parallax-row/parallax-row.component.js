import React from "react";

import { useScrollY } from "../../utils";

import "./parallax-row.styles.scss";

const ParallaxRow = ({ top, children, background, height, brightness }) => {
  const scrollY = useScrollY();

  return (
    <div
      className="parallax-background"
      style={{
        backgroundImage: background,
        height: height || "100vh",
        top: Number(top + scrollY * 0.4),
        filter: `brightness(${brightness})`
      }}
    >
      <div className="info-container" style={{ bottom: scrollY }}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxRow;
