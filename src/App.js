// src/App.js
import React from 'react';
import Search from './Search';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Wikipedia Search Application</h1>
                <p>Welcome to the WikiFinder</p>
            </header>
            <main className="app-main">
                <Search />
            </main>
        </div>
    );
}

export default App;
