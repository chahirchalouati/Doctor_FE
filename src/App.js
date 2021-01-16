
import React from 'react'
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { store } from "./Redux";
import history from "./Routes/History";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from './Pages/Home';
function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />

                </Switch>
            </Router>
        </Provider>);
}

export default App
