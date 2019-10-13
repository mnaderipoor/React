import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import RisksPage from "../container/risksPage";
import Logout from "../components/logout";
import Threats from "../components/threats";
import NotFound from "../container/notFound";
import Dashboard from "../container/dashboard";
import ThreatsPage from "../container/threatsPage";
import ProtectedRoute from "../components/common/protectedRoute";
import SAPage from "../container/SAPage";

const Routes =()=> {
    return (
            <Switch>
                  {/* <Route path="/login" render={(props) => <LoginForm sortBy="newest" {...props} />} /> */}
                  {/*<Route path="/login" component={LoginForm} />*/}
                  {/*<ProtectedRoute path="/threats/:id" component={ThreatForm} />*/}
                  {/*<Route*/}
                  {/*  path="/threats"*/}
                  {/*  render={props => <Threats {...props} user={user} />}*/}
                  {/*/>*/}
                  {/* <Route path="/profile" component={Profile} /> */}
                  <Route path="/risks" component={RisksPage} />
                  <Route path="/logout" component={Logout} />
                  <Route path="/not-found" component={NotFound} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/threats" component={ThreatsPage} />
                  <Route path="/sa" component={SAPage} />

                  <Redirect from="/" exact to="/dashboard" />
                  <Redirect to="/not-found" />

                {/* <Route path="/threats/:year?/:month?" component={Threats} /> */}
            </Switch>
    )
}
export default Routes;
