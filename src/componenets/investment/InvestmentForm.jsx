import React, { useState } from "react";

import classes from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  const currentSavingChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const yearlyContributionChangeHandler = (event) => {
    setYearlyContribution(event.target.value);
  };

  const expectedReturnChangeHandler = (event) => {
    setExpectedReturn(event.target.value);
  };

  const durationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  const onResetHandler = () => {
    setCurrentSavings("");
    setYearlyContribution("");
    setExpectedReturn("");
    setDuration("");
    props.onReset();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };
    props.onCalculate(formData);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlyContributionChangeHandler}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={expectedReturnChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={durationChangeHandler} />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={onResetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
