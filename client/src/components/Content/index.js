import React from "react";
import "./style.css";

function Content(props) {

    return(
        <div className="card cardStyle rollOut">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Content;