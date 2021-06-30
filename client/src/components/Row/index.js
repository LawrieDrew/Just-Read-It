import React from "react";
import "./style.css";

function Row(props) {
  return <div className="row align-items-center">{props.children}</div>;
}

export default Row;