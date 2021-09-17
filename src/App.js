import React, {useEffect} from "react";
import Alphabets from "./components/Alphabets/Alphabets"
import DropPanel from "./components/DropPanel/DropPanel"
import Submit from "./components/Submit/Submit"
import Results from "./components/Results/Results";
import './App.scss'
import { useState } from "react";

function App() {

  const [apiResponse, setApiResponse] = useState(null);

  const result = (api_res) => setApiResponse(api_res);

  return (
    <div className="App">
      <main>

        <Alphabets />
        <Submit result={result} />  
        <Results results={apiResponse} result={result}/>
        <DropPanel />

      </main>

    </div>
  );
}

export default App;
