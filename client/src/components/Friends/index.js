import React from "react";
import "./style.css";

function Friends() {
    return(
        <section>
            <div className="friends">
                <div id="kid1">
                <img src="./images/friends/bee.png" alt="animal" />
                </div>
                <div id="kid2">
                <img src="./images/friends/kitty.png" alt="animal" />
                </div>
                <div id="kid3">
                <img src="./images/friends/turtle.png" alt="animal" />
                </div>
                <div id="owl">
                <img  src="./images/friends/owl.png" alt="owl"/>
                </div>
            </div>
        </section>
    )
}

export default Friends;