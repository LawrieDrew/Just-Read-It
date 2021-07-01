import React from "react";
import "./style.css"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function StartBtn(props) {
  return (
    <span className="btn hidden" {...props} role="button" tabIndex="0">
      Read this story!
    </span>
  );
}

export default StartBtn;
