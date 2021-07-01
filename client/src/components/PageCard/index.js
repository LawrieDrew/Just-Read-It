import React from "react";

function PageCard({children}) {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{children}</p>
            </div>
        </div>
    )
}

export default PageCard;