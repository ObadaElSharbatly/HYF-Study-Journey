import React from "react";

function Transaction({ transaction, transactions, setTransactions }) {
  const sign = transaction.amount > 0 ? "+" : "-";
  function deleteExpenses (e) {
    console.log(e)
    setTransactions(preValue => preValue.filter(transaction => transaction.id !== e.target.id))
  }
  return (
    <li
      className={transaction.amount > 0 ? "plus" : "minus"}
    >
      {transaction.text}
      <span>
        {sign}$ {Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" id={transaction.id} onClick={deleteExpenses}>x</button>
    </li>
  );
}

export default Transaction;
