import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/application";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Skills skills={["Javascript", "Typescript", "React"]} />
      {/* <Application /> */}
    </div>
  );
}

export default App;
