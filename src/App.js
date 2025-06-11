import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TodoApp from "./components/TodoApp";
import WeatherApp from "./components/WeatherApp";
import GitHubDashboard from "./components/GitHubDashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/todo" element={<TodoApp/>} />
          <Route path="/weather" element={<WeatherApp/>} />
          <Route path="/github" element={<GitHubDashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
