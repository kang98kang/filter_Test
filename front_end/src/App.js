import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterComponent from "./components/FilterComponent";
import ResultComponent from "./components/ResultComponent";
import Layout from "./Layout";

function App() {
  const [results, setResults] = useState([]);

  return (
    <Router>
      <Routes>
        <Route Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<FilterComponent setResults={setResults} />}
          ></Route>
          <Route
            path="/results"
            element={<ResultComponent results={results} />}
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
