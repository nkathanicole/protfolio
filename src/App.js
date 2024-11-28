import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; 

const App = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Home />
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default App;
