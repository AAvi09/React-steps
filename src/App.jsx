import { useState } from "react";
import "./index.css";
import Steps from "./components/Steps";
import Counter from "./components/Counter";
import Flashcards from "./components/Flashcards";
import Accordian from "./components/Accordian";
import MainTip from "./components/MainTip";

function App() {
  return (
    <div>
      <Steps />
      <Counter />
      <Flashcards />
      <Accordian />
      <MainTip />
    </div>
  );
}

export default App;
