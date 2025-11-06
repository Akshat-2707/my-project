import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length > 1) {
        const res = await axios.get(`http://localhost:5000/api/search?q=${query}`);
        setResults(res.data.results);
      }
    };
    const timer = setTimeout(fetchData, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Product Search</h1>
      <input
        style={{ padding: 8, width: "100%" }}
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((p) => (
          <li key={p._id}>
            <b>{p.name}</b> - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
