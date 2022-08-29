import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 222.22,
    date: new Date(2019, 1, 22),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 222.22,
    date: new Date(2020, 3, 22),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 222.22,
    date: new Date(2020, 6, 22),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 222.22,
    date: new Date(2021, 9, 22),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
