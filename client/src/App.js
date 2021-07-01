import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";

// import Wrapper from "./components/Wrapper";

//need to add login/logout routes below
function App() {
  return (

    <Router>
          <div>
            
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/:id">
                  <StoryPage />
                </Route>
             </Switch>

  
          </div>
    </Router>
          

  );
}

export default App;