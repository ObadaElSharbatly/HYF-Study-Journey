import React, { useContext, useState } from "react";
import { ExpensesContext } from "../context/GlobalContext";
import { v4 as uuid } from "uuid";

function AddTransaction(props) {
  const { transactionsState } = useContext(ExpensesContext);
  const [transactions, setTransactions] = transactionsState;
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function handleText(e) {
    setText(e.target.value);
  }
  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function addTransaction(e) {
    e.preventDefault();
    setTransactions((prevValue) => [
      ...prevValue,
      { id: uuid(), text, amount: Number(amount) },
    ]);
    setText("");
    setAmount(1);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={handleText}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
