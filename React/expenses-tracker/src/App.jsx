import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import { ExpensesProvider } from "./context/GlobalContext";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ExpensesProvider>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </ExpensesProvider>
      </div>
    </div>
  );
}

export default App;
