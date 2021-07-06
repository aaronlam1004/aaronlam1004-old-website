import React from 'react';

// import Opening from './components/Opening.jsx';
// import Header from './components/Header.js';
// import Footer from './components/Footer.jsx';

import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Skills from './components/Technical.jsx';


function App() {
    //<img src={logo} className="App-logo" alt="logo" />
    return (
        <div>
            <Navbar/>
            <About/>
            <Skills/>
            {/*<Footer />*/}
        </div>  
    );
}

export default App;