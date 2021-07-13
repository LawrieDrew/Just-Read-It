import React, {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import API from "../../utils/API";
import "./style.css";
import { UserContext } from "../../utils/UserContext";
// import List from "../components/List";
// import ListItem from "../components/ListItem";



function StoryPage(props) {
	function Test(){
		console.log("it works!!")
	}


  return (
    <div>
      {props.children}
	  <button onClick={() => Test()}>Next Page!</button>
    </div>
  )

};

export default StoryPage;