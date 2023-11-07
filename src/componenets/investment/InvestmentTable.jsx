import React from "react";
import InvestmentTableBody from "./InvestmentTableBody";

import classes from "./InvestmentTable.module.css";

const InvestmentTable = (props) => {
  const tableHeaders = [
    "Year",
    "Total Savings",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
  ];

  return (
    <>
    <table className={classes.result}>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <InvestmentTableBody yearlyData={props.yearlyData}/>
    </table>
    </>
  );
};

export default InvestmentTable;
