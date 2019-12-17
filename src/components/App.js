import React from 'react';
import '../App.css';
import {Route, Switch} from 'react-router-dom'

import HomePage from "../pages/HomePage/HomePage";
import ContactDetailsPage from "../pages/ContactDetailsPage/ContactDetailsPage";
import ContactEditPage from "../pages/ContactEditPage/ContactEditPage";
import Statistics from "../pages/Statistics/Statistics";
import ContactPage from "../pages/ContactPage/ContactPage";
import Header from "./Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route exact path={'/contact/'} component={ContactPage}/>
                <Route exact path={'/contact/edit/:id?'} component={ContactEditPage}/>
                <Route exact path={'/contact/:id'} component={ContactDetailsPage}/>
                <Route exact path={'/stats/'} component={Statistics}/>
            </Switch>
        </div>
    );
}

export default App;
