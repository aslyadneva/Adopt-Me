import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elementRef = useRef(null);

  if (!elementRef.current) {
    const div = document.createElement("div");
    elementRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.querySelector("#modal");
    modalRoot.appendChild(elementRef.current);

    // runs on unmount aka clean up
    return () => modalRoot.removeChild(elementRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
