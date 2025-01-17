import React, { useState } from "react";

const Flashcards = () => {
  const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ];
  return (
    <div className="w-screen h-auto bg-zinc-800 flex flex-wrap justify-center items-center gap-6 p-4">
      {questions.map((que) => (
        <Card key={que.id} question={que.question} answers={que.answer} />
      ))}
    </div>
  );
};

const Card = ({ question, answers }) => {
  const [flipCard, setFlipCard] = useState(true);
  const handleFlipCard = () => {
    setFlipCard(!flipCard);
  };
  return (
    <div
      className="bg-zinc-950 w-64 h-64 rounded-lg text-white font-bold p-4 shadow-lg"
      onClick={handleFlipCard}
    >
      <h1 className={flipCard ? "text-lg" : "bg-red-700 text-2xl"}>
        {flipCard ? question : answers}
      </h1>
    </div>
  );
};

export default Flashcards;
