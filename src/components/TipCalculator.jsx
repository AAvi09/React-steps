import React from "react";

const TipCalculator = ({ finalBill, tipPercentage, bill }) => {
  return (
    <div>
      <h1>
        You pay {finalBill}$ ({bill} + {tipPercentage})$
      </h1>
    </div>
  );
};

export default TipCalculator;
