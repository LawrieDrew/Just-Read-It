import React from "react";


function Content(props) {

    return(
        <div className="story-card">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Content;