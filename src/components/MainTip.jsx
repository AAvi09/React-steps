import React, { useState } from "react";
import Bill from "./Bill";
import YourService from "./YourService";
import FriendService from "./FriendService";
import TipCalculator from "./TipCalculator";

const MainTip = () => {
  const [bill, setBill] = useState();
  const [yourTipPer, setYourTipPer] = useState();
  const [friendTipPer, setFriendTipPer] = useState();
  const tipPercentage = bill * ((yourTipPer + friendTipPer) / 2 / 100);

  if (tipPercentage === isNaN) return null;
  console.log(tipPercentage);
  let finalBill = bill + tipPercentage;

  const handleReset = () => {
    setBill(0);
    setYourTipPer(0);
    setFriendTipPer(0);
    finalBill = 0;
  };

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <YourService yourTipPer={yourTipPer} setYourTipPer={setYourTipPer} />
      <FriendService
        friendTipPer={friendTipPer}
        setFriendTipPer={setFriendTipPer}
      />
      <TipCalculator
        finalBill={finalBill}
        tipPercentage={tipPercentage}
        bill={bill}
      />
      <button className="rounded-xl bg-slate-400" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default MainTip;
