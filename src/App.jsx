import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CustomSlider from "./comps/CustomSlider";
import OutValue from "./comps/OutValue";

function App() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(4000000000);
  const [expectedReturns, setExpectedReturns] = useState(50000000);
  const [timePeriod, setTimePeriod] = useState(10);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estReturns, setEstReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const handleInput = (e, max, setterFn) => {
    console.log(e.target.value, "the values");

    if (e.target.value == "") {
      setterFn(0);
    } else if (e.target.value.length > 0 && e.target.value.charAt(0) == "0") {
      setterFn(e.target.value.replace(/^0+(?=\d)/, ""));
    } else if (e.target.value < 0) {
      setterFn(1);
    } else if (e.target.value > max) {
      setterFn(max);
    } else {
      setterFn(e.target.value);
    }
  };

  useEffect(() => {
    let tax = expectedReturns * 0.04;
    setInvestedAmount(tax * (monthlyInvestment / 1000000000000));
  }, [monthlyInvestment, expectedReturns]);

  return (
    <>
      <div className="header">
        {/* //image */}
        <img src={"dog.png"} style={{ width: 80, height: 80 }} alt="My Image" />
        <div style={{ marginLeft: 40 }}>SHARBI REWARDS CALCULATOR</div>
      </div>
      <div className="container">
        <div className="calc-container">
          <div>
            <CustomSlider
              label={"Your Holdings"}
              min={100000}
              max={20000000000}
              currentValue={monthlyInvestment}
              showText={`SHARBI`}
              onChange={handleInput}
              step={100000}
              setterFn={setMonthlyInvestment}
            />

            <CustomSlider
              label={"Expected daily volume"}
              min={50000}
              max={500000000}
              currentValue={expectedReturns}
              onChange={handleInput}
              showText={"$    "}
              textAlign={true}
              step={50000}
              setterFn={setExpectedReturns}
            />
          </div>
          <div className="rewards-title">Your reward in USD</div>

          <div className="output">
            <OutValue label="Daily" value={investedAmount} />
            <OutValue label="Weekly" value={parseInt(investedAmount * 7)} />
            <OutValue label="Monthly" value={parseInt(investedAmount * 30)} />
            <OutValue label="Yearly" value={parseInt(investedAmount * 365)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
