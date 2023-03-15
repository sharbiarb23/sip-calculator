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

  const handleMonthlyInvestment = (e) => {
    setMonthlyInvestment(e.target.value);
  };
  const handleExpectedReturns = (e) => {
    setExpectedReturns(e.target.value);
  };

  const handleTimePeriod = (e) => {
    setTimePeriod(e.target.value);
  };

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
              showText={`₹ ${monthlyInvestment}`}
              onChange={handleMonthlyInvestment}
              step={500}
            />

            <CustomSlider
              label={"Expected return rate (p.a)"}
              min={1}
              max={30}
              currentValue={expectedReturns}
              onChange={handleExpectedReturns}
              showText={`${expectedReturns}% `}
              step={0.1}
            />

            <CustomSlider
              label={"Time Period"}
              min={1}
              max={40}
              currentValue={timePeriod}
              onChange={handleTimePeriod}
              showText={`${timePeriod} Yr`}
              step={1}
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
