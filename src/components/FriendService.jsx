import React from "react";

const FriendService = ({ FriendTipPer, setFriendTipPer }) => {
  return (
    <div>
      <p>How did your friend like the service?</p>
      <select
        value={FriendTipPer}
        onChange={(e) => setFriendTipPer(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>it was okay(5%)</option>
        <option value={10}>it was good(10%)</option>
        <option value={20}>Absolutely Amazing!(20%)</option>
      </select>
    </div>
  );
};

export default FriendService;
