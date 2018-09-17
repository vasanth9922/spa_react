import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter, NavLink, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from './home';
import About from './about';
import Friends from './friends';
import NotFound from './notfound';


class SpaWebsite extends React.Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Doing SPA...!!!</h1>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink exact strict to="/friends">Friends</NavLink></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route exact strict path="/friends" component={Friends} />
                        <Redirect to="/" />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default SpaWebsite;