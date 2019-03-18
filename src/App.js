import React, { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Content/Profile';

import './App.css'

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Profile />
        </div>
    )
}

export default App;