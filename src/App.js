import React from 'react';

import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import TechnicalSkills from './components/TechnicalSkills.jsx';
import Portfolio from './components/Portfolio.jsx';
import Footer from './components/Footer.jsx';
import Background from './components/Background.jsx';

function App() {
    //<img src={logo} className="App-logo" alt="logo" />

    return (
        <div>
            <Background/>
            <Navbar/>
            <About/>
            <TechnicalSkills/>
            <Portfolio/>
            <Footer/>
        </div>  
    );
}

export default App;
