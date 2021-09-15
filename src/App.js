import React from "react";
import Alphabets from "./components/Alphabets/Alphabets"
import DropPanel from "./components/DropPanel/DropPanel"
import Submit from "./components/Submit/Submit"
import './App.scss'

function App() {
  return (
    <div className="App">
      <main>

        <Alphabets />
        <Submit />  
        <DropPanel />

      </main>

    </div>
  );
}

export default App;
