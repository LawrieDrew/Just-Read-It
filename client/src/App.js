import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import StoryPage from "./pages/StoryPage";

import Wrapper from "./components/Wrapper";
import Auth from "./auth";

//need to add login/logout routes below
function App() {

  const [auth, setAuth] = React.useState(false);
  return (

      <div>
        <Auth.Provider value={{auth, setAuth}}>
        <Router>
          <Routes>

          </Routes>
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
 </Auth.Provider>        

  );


      </div>

  
}

//login/logout doodads
const Login = () => {
  return(
    <div>
      <h1>JUST READ IT!</h1>
      <button>Login</button>
    </div>
  )
}

const Home = () => {
  return(
    <div>
      <h1>Welcome!</h1>
      <button>Logout</button>
    </div>
  )
}

const Routes = () => {
  const Auth = React.useContext(Auth)
  return(
    <Switch>
      <Route path="/login" component={Login} auth={Auth.auth}/>
      <Route path="/Home" auth={Auth.auth} component={Home}/>
    </Switch>
  )
}

const ProtectedRoute = ({auth, component:Component,...rest}) => {
  return(
    <Route
    {...rest}
    render = {() =>!auth? (
      <Component/>
    ):
    (
      <Redirect to="/login"/>
    )
  }
    />
  )
}

const ProtectedLogin = ({auth, component:Component,...rest}) => {
  return(
    <Route
    {...rest}
    render = {() =>auth? (
      <Component/>
    ):
    (
      <Redirect to="/login"/>
    )
  }
    />
  )
}

export default App;