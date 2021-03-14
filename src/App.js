import React from "react";
import "./App.css";
import { Link, BrowserRouter, Switch } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Content from './components/Content/Content'

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>

          <div className="side-bar">
            <Sidebar />
          </div>
          <div className="content">
            <Content />
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
