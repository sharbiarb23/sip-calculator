import React from "react";

export default function OutValue(props) {
  const { label, value } = props;
  return (
    <div className="output-container">
      {label}

      <div className="calc-amount">{value}</div>
    </div>
  );
}
