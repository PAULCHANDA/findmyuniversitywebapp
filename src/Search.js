import React, { useState } from 'react';
import axios from 'axios';

export default function Search() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8082/api/universities/search?query=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a university..."
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {results.map((university) => (
                    <li key={university.id}>
                        <a href={university.link} target="_blank" rel="noopener noreferrer">
                            <img src={university.profilePicture} alt={university.universityName} style={{ width: '50px', height: '50px' }} />
                            {university.universityName} - {university.province}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

