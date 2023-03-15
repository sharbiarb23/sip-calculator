import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CustomSlider from "./comps/CustomSlider";
import OutValue from "./comps/OutValue";

function App() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [expectedReturns, setExpectedReturns] = useState(12);
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
  // const handleMonthlyInvestment = (e) => {
  //   console.log(e.target.value, "the values");

  //   if (e.target.value == "") {
  //     setMonthlyInvestment(0);
  //   } else if (e.target.value.length > 0 && e.target.value.charAt(0) == "0") {
  //     setMonthlyInvestment(e.target.value.replace(/^0+(?=\d)/, ""));
  //   } else if (e.target.value < 0) {
  //     setMonthlyInvestment(1);
  //   } else if (e.target.value > 100000) {
  //     setMonthlyInvestment(100000);
  //   } else {
  //     setMonthlyInvestment(e.target.value);
  //   }
  // };
  // const handleExpectedReturns = (e) => {
  //   setExpectedReturns(e.target.value);
  // };

  // const handleTimePeriod = (e) => {
  //   setTimePeriod(e.target.value);
  // };

  useEffect(() => {
    setInvestedAmount(monthlyInvestment * timePeriod * 12);
    setEstReturns(
      monthlyInvestment * timePeriod * 12 * (expectedReturns / 100)
    );

    let totalAmount =
      monthlyInvestment * timePeriod * 12 +
      monthlyInvestment * timePeriod * 12 * (expectedReturns / 100);
    setTotalValue(totalAmount);
  }, [monthlyInvestment, timePeriod, expectedReturns]);

  return (
    <>
      <div className="header">SIP CALCULATOR</div>
      <div className="container">
        <div className="calc-container">
          <div>
            <CustomSlider
              label={"Monthly Investment"}
              min={500}
              max={100000}
              currentValue={monthlyInvestment}
              showText={`  ₹`}
              onChange={handleInput}
              step={500}
              setterFn={setMonthlyInvestment}
            />

            <CustomSlider
              label={"Expected return rate (p.a)"}
              min={1}
              max={30}
              currentValue={expectedReturns}
              onChange={handleInput}
              showText={`  %`}
              step={0.1}
              setterFn={setExpectedReturns}
            />

            <CustomSlider
              label={"Time Period"}
              min={1}
              max={40}
              currentValue={timePeriod}
              onChange={handleInput}
              showText={`yr`}
              step={1}
              setterFn={setTimePeriod}
            />
          </div>
          <div className="output">
            <OutValue label="Invested Amount" value={investedAmount} />
            <OutValue label="Est returns" value={parseInt(estReturns)} />
            <OutValue label="Total Value" value={totalValue} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
