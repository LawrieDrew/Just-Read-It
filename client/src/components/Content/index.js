import React from "react";
import "./style.css";

function Content(props) {

    return(
        <div className="card cardStyle d-flex ">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Content;