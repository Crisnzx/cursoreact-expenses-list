import { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import './Expenses.css';

// smart/stateful components
function Expenses(props) {

   const [year, setYear] = useState('2020');

   function selectYearHandler(year) {
      setYear(year);
   }

   const filteredExpenses = props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
   });


   return (

      <div>
         <Card className="expenses">
            <ExpensesFilter selectedYear={year} onSelectYear={selectYearHandler} />
            <ExpensesList filteredExpenses={filteredExpenses}/>
         </Card>
      </div>
   );
}

export default Expenses;