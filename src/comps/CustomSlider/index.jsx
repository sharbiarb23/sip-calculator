import { useState } from "react";

const CustomSlider = (props) => {
  const {
    label,
    min,
    max,
    currentValue,
    onChange,
    step,
    showText,
    setterFn,
    textAlign,
  } = props;

  function convertAmount(amount) {
    if (amount >= 1000000) {
      return (amount / 1000000).toFixed(1) + "M";
    } else if (amount >= 1000) {
      return (amount / 1000).toFixed(1) + "K";
    } else {
      return amount.toString();
    }
  }

  return (
    <div className="slider-container">
      <div className="label-value">
        {label}{" "}
        <div className="input-container">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              className="input-box"
              type={"number"}
              value={currentValue}
              onChange={(e) => {
                onChange(e, max, setterFn);
              }}
              min={100}
              max={10000}
              step={1}
            />
            <div className="amount-short-title">
              {" "}
              {convertAmount(currentValue)}{" "}
            </div>
          </div>

          <div
            style={{
              fontWeight: "bold",
              height: 50,
              fontSize: 15,
              color: "#808080",
              marginRight: textAlign ? 30 : 0,
            }}
          >
            {showText}
          </div>
        </div>
      </div>

      <input
        className="range-slider"
        style={{ width: "100%" }}
        type="range"
        onChange={(e) => {
          onChange(e, max, setterFn);
        }}
        min={min}
        max={max}
        step={step}
        defaultValue={currentValue}
        width={currentValue}
        value={currentValue}
      />
    </div>
  );
};

export default CustomSlider;
