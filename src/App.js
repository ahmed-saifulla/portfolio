import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Content from './components/Content/Content'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
