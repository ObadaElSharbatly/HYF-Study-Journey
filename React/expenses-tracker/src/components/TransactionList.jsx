import React, { useContext } from "react";
import { ExpensesContext } from "../context/GlobalContext";
import Transaction from "./Transaction";

function TransactionList( ) {
  const { transactionsState } = useContext(ExpensesContext);
  const [transactions, setTransactions] = transactionsState;

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => 
        <Transaction transaction={transaction}
         key={transaction.id} 
         transactions={transactions}
         setTransactions={setTransactions}
         />)}
      </ul>
    </>
  );
}

export default TransactionList;
