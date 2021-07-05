import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import Card from '../UI/Card';
import './Expenses.css';

// smart/stateful components
function Expenses(props) {

   const [year,setYear] = useState('2022');

   function selectYearHandler(year) {
      setYear(year);
   }

   return (

      <div>
         <Card className="expenses">
            <ExpensesFilter selectedYear={year} onSelectYear={selectYearHandler} />
            <ExpenseItem
               date={props.items[0].date}
               title={props.items[0].title}
               amount={props.items[0].amount}
            />
            <ExpenseItem
               date={props.items[1].date}
               title={props.items[1].title}
               amount={props.items[1].amount}
            />

            <ExpenseItem
               date={props.items[2].date}
               title={props.items[2].title}
               amount={props.items[2].amount}
            />

            <ExpenseItem
               date={props.items[3].date}
               title={props.items[3].title}
               amount={props.items[3].amount}

            />
         </Card>
      </div>
   );
}

export default Expenses;