import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import News from './components/Content/News';
import Music from './components/Content/Music';
import Profile from './components/Content/Profile/index.js';
import Dialogs from './components/Content/Dialogs';
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <div className="content">
                    <Route path="/profile" component={Profile} />
                    <Route path="/dialogs" component={Dialogs} />
                    <Route path="/news" component={News} />
                    <Route path="/Music" component={Music} />
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;