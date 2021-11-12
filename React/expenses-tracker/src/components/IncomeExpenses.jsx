import React, { useContext } from "react";
import { ExpensesContext } from "../context/GlobalContext";

function IncomeExpenses(props) {
  const { transactionsState } = useContext(ExpensesContext);
  const [transactions] = transactionsState;

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((a, b) => {return a + b},0)
    .toFixed(2);

  const expenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => transaction.amount)
    .reduce((a, b) => {return a + b},0)
    .toFixed(2);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{Math.abs(expenses)}</p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses;
