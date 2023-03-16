import { useState } from "react";

const CustomSlider = (props) => {
  const { label, min, max, currentValue, onChange, step, showText, setterFn } =
    props;

  return (
    <div className="slider-container">
      <div className="label-value">
        {label}{" "}
        <div className="input-container">
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
          <div style={{ fontWeight: "bold", fontSize: 20, color: "#808080" }}>
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
