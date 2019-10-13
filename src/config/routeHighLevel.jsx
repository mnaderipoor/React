import React from "react";
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import LoginForm from "../components/loginForm";
import RegisterForm from "../components/registerForm";
import App from "../App"

const RouteHighLevel =()=> {
    return (
        <Router>
            <Route path="/login" component={LoginForm}/>
            {/*<Route path="/register" component={RegisterForm} />*/}
            <Route path="/" component={App}/>
        </Router>
    )
}
export default RouteHighLevel;