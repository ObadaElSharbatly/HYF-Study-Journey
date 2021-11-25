import React, { useContext } from "react";
import { ExpensesContext } from "../context/GlobalContext";

function Balance() {
  const [transactions] = useContext(ExpensesContext);
  const amountArr = transactions.map((transaction) => transaction.amount);
  const total = amountArr.reduce((a, b) => {return a + b},0).toFixed(2);

  return (
    <>
      <h4>Balance</h4>
      <h1>$ {total}</h1>
    </>
  );
}

export default Balance;
