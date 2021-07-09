import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";
import Register from "./pages/Register";

//adding more

// import Wrapper from "./components/Wrapper";

export const CredentialsContext = React.createContext(null);
//need to add login/logout routes below
function App() {
  const credentialsState =useState(null);
  return (
<div>
      <CredentialsContext.Provider value={credentialsState}>
          <Router>
          
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>

                  <Route exact path="/register">
                    <Register />
                  </Route>

                  <Route exact path="/:id">
                    <StoryPage />
                  </Route>

                  
              </Switch>  
            
          </Router>
    </CredentialsContext.Provider>
</div>
  
          

  );
}

export default App;