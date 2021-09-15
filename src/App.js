import React from "react";
import Alphabets from "./components/Alphabets/Alphabets";
import './App.scss'

function App() {
  return (
    <div className="App">
      <main>

        <Alphabets />  
        <section class="content"></section>
        
        <section id="drop-panel">
          <header>DRAG ITEMS HERE</header>
        </section>
      </main>

    </div>
  );
}

export default App;
