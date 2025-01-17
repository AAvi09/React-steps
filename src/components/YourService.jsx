import React from "react";

const YourService = ({ yourTipPer, setYourTipPer }) => {
  return (
    <div>
      <p>How much did you like the service?</p>
      <select
        value={yourTipPer}
        onChange={(e) => setYourTipPer(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>it was okay(5%)</option>
        <option value={10}>it was good(10%)</option>
        <option value={20}>Absolutely Amazing!(20%)</option>
      </select>
    </div>
  );
};

export default YourService;
