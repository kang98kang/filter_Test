import React, { useState } from 'react';
import FilterComponent from './components/FilterComponent';
import ResultComponent from './components/ResultComponent';

function App() {
    const [results, setResults] = useState([]);

    return (
        <div>
            <FilterComponent setResults={setResults} />
            <ResultComponent results={results} />
        </div>
    );
}

export default App;
