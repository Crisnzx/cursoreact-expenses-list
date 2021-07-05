import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

function NewExpense(props) {

   function onSubmitExpenseDataHandler(expenseData) {

      expenseData = {
         ...expenseData,
         id: Math.trunc(Math.random() * 100).toString()
      }

      props.onAddExpense(expenseData);
      setIsOpen(false);
   }

   const [isOpen, setIsOpen] = useState(true);

   function openForm() {
      setIsOpen(true);
   }

   function closeForm() {
      setIsOpen(false);
   }

   return (
      <Card className="new-expense">
         {!isOpen && <button onClick={openForm}>Add Expense</button>}
         {isOpen && <ExpenseForm
            onSubmitExpenseData={onSubmitExpenseDataHandler}
            closeForm={closeForm}
         />}
      </Card>

   );
}

export default NewExpense;