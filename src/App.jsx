import { useState } from "react";
import "./index.css";
import Steps from "./components/Steps";
import Counter from "./components/Counter";
import Flashcards from "./components/Flashcards";
import Accordian from "./components/Accordian";

function App() {
  return (
    <div>
      <Steps />
      <Counter />
      <Flashcards />
      <Accordian />
    </div>
  );
}

export default App;
