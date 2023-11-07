import React from "react";

const InvestmentTableBody = (props) => {
  return (
    <tbody>
      {props.yearlyData.map((row) => {
        return (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{row.savingsEndOfYear}</td>
            <td>{row.yearlyInterest}</td>
            <td>{row.totalInterest}</td>
            <td>{row.investedCapital}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default InvestmentTableBody;
