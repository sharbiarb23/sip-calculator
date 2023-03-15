import { useState } from "react";

const CustomSlider = (props) => {
  const { label, min, max, currentValue, onChange, step, showText } = props;

  return (
    <div className="slider-container">
      <div className="label-value">
        {label}{" "}
        <div style={{ fontWeight: "bold", fontSize: 18 }}>{showText}</div>
      </div>
      <input
        className="range-slider"
        style={{ width: "100%" }}
        type="range"
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        defaultValue={currentValue}
        width={currentValue}
      />
    </div>
  );
};

export default CustomSlider;
