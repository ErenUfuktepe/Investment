import React, { useState } from "react";

import Header from "./componenets/commons/Header";
import InvestmentForm from "./componenets/investment/InvestmentForm";
import InvestmentTable from "./componenets/investment/InvestmentTable";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput.currentSavings;
    let investedCapital = +userInput.currentSavings;
    let totalInerest = 0;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInerest = totalInerest + yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital += yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: numberFormatter.format(yearlyInterest),
        savingsEndOfYear: numberFormatter.format(currentSavings),
        yearlyContribution: numberFormatter.format(yearlyContribution),
        investedCapital: numberFormatter.format(investedCapital),
        totalInterest: numberFormatter.format(totalInerest),
      });
    }
    setYearlyData(yearlyData);
  };

  const onResetHandler = () => {
    setYearlyData([]);
  };

  return (
    <div>
      <Header/>
      <InvestmentForm onCalculate={calculateHandler} onReset={onResetHandler} />
      {yearlyData.length === 0 ? (
        <p style={{textAlign:'center'}}>No investment calculated yet.</p>
      ) : (
        <InvestmentTable yearlyData={yearlyData} />
      )}
    </div>
  );
}

export default App;
