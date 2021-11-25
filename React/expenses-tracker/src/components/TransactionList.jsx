import React, { useContext } from "react";
import { ExpensesContext } from "../context/GlobalContext";
import Transaction from "./Transaction";

function TransactionList( ) {
  const [transactions, setTransactions] = useContext(ExpensesContext);

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
