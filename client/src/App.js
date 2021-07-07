import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
// import StoryPage from "./pages/StoryPage";
import Auth from './auth/auth';
import "./auth/auth.css";

//adding more

// import Wrapper from "./components/Wrapper";

//need to add login/logout routes below
function App() {
  return (
    <Auth/>         
  );
}

export default App;