import { useState } from "react";
import "./index.css";
import Steps from "./components/Steps";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Steps />
      <Counter />
    </div>
  );
}

export default App;
