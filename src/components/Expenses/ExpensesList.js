import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList() {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date).toISOString()}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
