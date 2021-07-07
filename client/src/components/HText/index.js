import React from "react";
import "./style.css";

function HText(props) {
  return (
    <div>
      <h1 className="htext">{props.children}</h1>
    </div>
  )
}

export default HText;