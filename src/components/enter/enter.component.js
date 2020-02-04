import React, { useRef, useEffect, useState } from "react";

import { useScrollY } from "../../utils";

import "./enter.styles.scss";

const Enter = ({ children, enterStyle, ...otherProps }) => {
  const [show, setShow] = useState(false);
  const enter = useRef(null);
  const scrollY = useScrollY();

  useEffect(() => {
    if (!enter) return;
    const { top } = enter.current.getBoundingClientRect();
    setShow(top < window.innerHeight);
  }, [scrollY]);

  return (
    <div
      className={`enter ${show ? enterStyle : null}`}
      ref={enter}
      {...otherProps}
    >
      {children}
    </div>
  );
};
export default Enter;
