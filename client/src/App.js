import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
    const [apiResponse, setApiResponse] = useState('');

    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setApiResponse(res))
          .catch(err => err);
    }

    useEffect(() => {
        callAPI();
    }, []);

    return (
      <div className="app">
          <header className="app-header">
              <img src={logo} className="app-logo" alt="logo" />
              <h1 className="app-title">Welcome to React</h1>
          </header>
          <p className="app-intro">{apiResponse}</p>
      </div>
    );
}
