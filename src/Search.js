// src/Search.js
import React, { useState } from 'react';
import './Search.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query) {
            const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query}`);
            const data = await response.json();
            setResults(data.query.search);
        }
    };

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Wikipedia..."
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="results-container">
                {results.map((result) => (
                    <div key={result.pageid} className="result-item">
                        <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" rel="noopener noreferrer" className="result-title">
                            {result.title}
                        </a>
                        <p dangerouslySetInnerHTML={{ __html: result.snippet }} className="result-snippet"></p>
                        <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" rel="noopener noreferrer" className="read-more">
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
