import React, { useContext } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Nav from "../components/Nav";
import Login from "../components/Login";
import Register from "../components/Register";
import { Container } from "../components/Grid";
import ProtectedRoute from "./ProtectedRoute";
import StoryRoute from "./StoryPages";
import { UserContext } from "../utils/UserContext";
import Logo from '../components/Logo';

//Now we have all the stuff we need .. let's render some components with the Router
const AppRouter = () => {
    const { user } = useContext( UserContext );
    return (
        <Router>
            <div>
                <Nav className="App-header" />
                <Logo/>
                <Container>
                    {!user
                        ? <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Redirect from="*" to="/login" />
                        </Switch>
                        : <Switch>
                            <Route path="/protected" component={ProtectedRoute} />
                            <Route path="/story/:id" component={StoryRoute} />
                            <Redirect from="*" to="/protected" />
                            {/* <Route component={NoMatch} /> */}
                        </Switch>
                    }
                </Container>
            </div>
        </Router>
    )
};

export default AppRouter;