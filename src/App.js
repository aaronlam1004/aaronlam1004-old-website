import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Portfolio from './components/Portfolio.js'

function App() {
    //<img src={logo} className="App-logo" alt="logo" />
    return (
        <div className = "App">
            <Header />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App;
