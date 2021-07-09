import React from "react";



// This file exports both the List and ListItem components

function List({ children }) {
  return (
    <div>
      <ul className="list-group d-inline-flex p-2 flex-row flex-wrap">{children}</ul>
    </div>
  );
}

export default List;

