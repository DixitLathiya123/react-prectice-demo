import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home';
import HeaderAndSidebar from './HeaderAndSidebar';

function RouterFile() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        </div>
    )
}

export default RouterFile
