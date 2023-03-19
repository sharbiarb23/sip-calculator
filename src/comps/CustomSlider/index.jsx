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
    tax,
    dropDown,
  } = props;

  const [selectedItem, setSelectedItem] = useState();

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const coins = ["shiba-inu", "floki", "baby-doge-coin"];

  function convertAmount(amount) {
    if (amount >= 1000000000) {
      return (amount / 1000000000).toFixed(1) + "B";
    } else if (amount >= 1000000) {
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
        {label}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {dropDown && (
            <select
              className="exchange-drop-down"
              value={selectedItem}
              onChange={handleItemChange}
            >
              <option
                value=""
                disabled
                selected={true}
                className="drop-placeholder"
              >
                Competitor daily volume
              </option>
              {coins.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}
        </div>

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

            {tax ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: 240,
                }}
              >
                <div className="amount-short-title">
                  {" "}
                  {convertAmount(currentValue)}{" "}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontFamily: "monospace",
                    fontWeight: "bold",
                  }}
                >
                  (USDC Rewards= ${currentValue * 0.04})
                </div>
              </div>
            ) : (
              <div className="amount-short-title">
                {" "}
                {convertAmount(currentValue)}{" "}
              </div>
            )}
          </div>

          <div
            style={{
              fontWeight: "bold",
              height: 50,
              fontSize: 15,
              color: "#333333",
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
