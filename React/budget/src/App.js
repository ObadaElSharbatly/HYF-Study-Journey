import './App.css';
import Alert from './components/alert';
import ExpenseForm from './components/expenseForm';
import ExpenseList from './components/expenseList';
import {v4 as uuid} from 'uuid';
import { useState } from 'react';


const initialExpenses = [
  {id: uuid(), charge: "rent", amount: 1600},
  {id: uuid(), charge: "car payment", amount: 400},
  {id: uuid(), charge: "credit card bill", amount: 1200},
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses}/>

      </main>
      <h1>
        total spending : {" "}
        <span className="total"> $ {expenses.reduce( (a,b) => a + b.amount , 0)} </span>
      </h1>
    </>
  );
}

export default App;


