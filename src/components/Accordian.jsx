import React, { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const Accordian = () => {
  return (
    <div className="w-screen h-screen bg-white text-center">
      <h1 className="text-black font-bold">ACCORDIAN</h1>
      <div className="bg-zinc-600 text-white font-bold space-y-10 justify-center">
        {faqs.map((faq, i) => (
          <AccordianItem num={i} key={i} title={faq.title} text={faq.text} />
        ))}
      </div>
    </div>
  );
};

export default Accordian;

const AccordianItem = ({ num, title, text }) => {
  const [showText, setShowText] = useState(false);
  const handleToggleText = () => {
    setShowText(!showText);
  };
  return (
    <div>
      <div className="flex space-x-10 text-center">
        <span>{num + 1}</span>
        <h1>{title}</h1>
        <button onClick={handleToggleText}>{showText ? "❌" : "➕"}</button>
      </div>
      <p>{showText ? text : null}</p>
    </div>
  );
};
