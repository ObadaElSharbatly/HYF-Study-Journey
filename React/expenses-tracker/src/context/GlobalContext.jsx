import React, { createContext, useState } from "react";

export const ExpensesContext = createContext();
export const ExpensesProvider = ({ children }) => {
  const dummyTransactions = [
    { id: "1", text: "Flower", amount: -20 },
    { id: "2", text: "Salary", amount: 300 },
    { id: "3", text: "Book", amount: -10 },
    { id: "4", text: "Camera", amount: 150 },
    { id: "5", text: "Camera", amount: 500 },
  ];
  
  const [transactions, setTransactions] = useState([]);

  return (
    <ExpensesContext.Provider
      value={{
        transactionsState: [transactions, setTransactions],
        dummy: dummyTransactions,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
