import React from "react";


function Content(props) {

    return(
        <div className="story-card">
            <div className="story-card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Content;