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
        top: Number(top + scrollY * 0.3),
        filter: `brightness(${brightness})`
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxRow;
