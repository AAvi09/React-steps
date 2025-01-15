import { useState } from "react";
import "./index.css";
import Steps from "./components/Steps";
import Counter from "./components/Counter";
import Flashcards from "./components/Flashcards";

function App() {
  return (
    <div>
      <Steps />
      <Counter />
      <Flashcards />
    </div>
  );
}

export default App;
