import React, { useState } from "react";

const Counter = () => {
  const [Step, SetStep] = useState(1);
  const [Count, SetCount] = useState(0);
  const handleStepDecrease = () => {
    if (Step > 1) SetStep((s) => s - 1);
  };
  const handleStepIncrease = () => {
    SetStep((s) => s + 1);
  };
  const handleCountDecrease = () => {
    SetCount((c) => c - Step);
  };
  const handleCountIncrease = () => {
    SetCount((c) => Step + c);
  };
  const date = new Date("Mon june 2047");
  date.setDate(date.getDate() + Count);

  return (
    <div>
      <h1 className="text-black font-extrabold text-2xl">COUNTER</h1>
      <div>
        <button
          className="p-2 m-2 text-black font-bold bg-slate-600"
          onClick={handleStepDecrease}
        >
          -
        </button>
        <span className="text-black font-bold">Step : {Step}</span>
        <button
          className="p-2 m-2 text-black font-bold bg-slate-600"
          onClick={handleStepIncrease}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="p-2 m-2 text-black font-bold bg-slate-600"
          onClick={handleCountDecrease}
        >
          -
        </button>
        <span className="text-black font-bold">Count : {Count}</span>
        <button
          className="p-2 m-2 text-black font-bold bg-slate-600"
          onClick={handleCountIncrease}
        >
          +
        </button>
      </div>
      <div>
        <p>
          <span>
            {Count === 0
              ? "Today is "
              : Count > 0
              ? `${Count} days from today is `
              : `${Count} days ago from today was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default Counter;
