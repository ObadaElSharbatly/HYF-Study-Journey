import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const ExpensesContext = createContext();
export const ExpensesProvider = ({ children }) => {
  const dummyTransactions = [
    { id: uuid(), text: "Flower",  amount: -20 },
    { id: uuid(), text: "Salary",  amount: 300 },
    { id: uuid(), text: "Book",    amount: -10 },
    { id: uuid(), text: "Camera1", amount: 150 },
    { id: uuid(), text: "Camera",  amount: 500 },
  ];
  
  const [transactions, setTransactions] = useState(dummyTransactions);

  return (
    <ExpensesContext.Provider
      value={[transactions, setTransactions]}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
