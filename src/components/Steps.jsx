import { useState } from "react";
const messages = [
  "💼",
  "Learn React 🏫",
  "Apply for jobs 👩‍💻👨‍💻",
  "invest your income 💵💲🤑",
];
const Steps = () => {
  const [step, SetStep] = useState(1);
  const [isOpen, SetIsOpen] = useState(true);

  const handleprevious = () => {
    if (step > 1) SetStep((s) => s - 1);
  };
  const handleNext = () => {
    if (step < 3) SetStep((s) => s + 1);
  };
  const active = "bg-green-800 rounded-full p-6  text-white";
  const deactive = "bg-red-600 rounded-full p-6 text-white ";
  return (
    <>
      <button
        onClick={() => SetIsOpen(!isOpen)}
        className="text-black font-extrabold"
      >
        &times;
      </button>

      {isOpen && (
        <div className="bg-zinc-500 w-1/2 p-10 m-10 rounded-xl">
          <div className="bg-orange-400 space-x-48 h-16 rounded-2xl">
            <span className={`${step === 1 ? active : deactive}`}>1</span>
            <span className={`${step === 2 ? active : deactive}`}>2</span>
            <span className={`${step === 3 ? active : deactive}`}>3</span>
          </div>
          <p className="text-black p-10 m-10 w-1/2 h-36 rounded-xl bg-slate-300">
            {messages[step]}
          </p>
          <Button onClick={handleprevious}>◀👈👈previous</Button>
          <Button onClick={handleNext}>
            Next<span>👉👉▶</span>
          </Button>
        </div>
      )}
    </>
  );
};

export default Steps;

const Button = ({ onClick, children }) => {
  return (
    <button
      className="text-white bg-blue-700 p-2 m-2 rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
