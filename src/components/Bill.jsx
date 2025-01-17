import React from "react";

const Bill = ({ bill, setBill }) => {
  return (
    <div>
      <p>How much was the bill ? </p>
      <input
        type="text"
        value={bill}
        placeholder="enter your bill"
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
};

export default Bill;
