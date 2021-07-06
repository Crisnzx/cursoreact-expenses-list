import { useState } from 'react';

import './ExpenseForm.css';


function ExpenseForm(props) {

   // const [enteredTitle, setEnteredTitle] = useState('');
   // const [enteredAmount, setEnteredAmount] = useState('');
   // const [enteredDate, setEnteredDate] = useState('');

   const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
   });

   const titleChangeHandler = (e) => {
      // setUserInput({
      //    ...userInput,
      //    enteredTitle: e.target.value  
      // });

      // you should use thi function syntax here whenever your state update depends on the previous state
      setUserInput((prevState) => {
         return {
            ...prevState,
            enteredTitle: e.target.value
         }
      });

   }

   const amountChangeHandler = (e) => {
      setUserInput((prevState) => {
         return {
            ...prevState,
            enteredAmount: e.target.value
         }
      });

   }

   const dateChangeHandler = (e) => {
      setUserInput((prevState) => {
         return {
            ...prevState,
            enteredDate: e.target.value
         }
      });

   }

   const submitHandler = e => {

      // the server won't send any request
      e.preventDefault();

      const expenseData = {
         title: userInput.enteredTitle,
         amount: Number(userInput.enteredAmount),
         date: new Date(userInput.enteredDate)
      }

      setUserInput({
         enteredTitle: '',
         enteredAmount: '',
         enteredDate: ''
      });

      props.onSubmitExpenseData(expenseData);

      /*
         APPROACH WITH VANILLA JAVASCRIPT
         const title = document.querySelector('input[type="text"]').value;
         const amount = document.querySelector('input[type="number"]').value;
         const date = document.querySelector('input[type="date"]').value;

         const userInput2 = {
            title,
            amount,
            date
         }
         document.querySelector('input[type="text"]').value = '';
         document.querySelector('input[type="number"]').value = '';
         document.querySelector('input[type="date"]').value = '';
      */
   }

   return (
      <form action="" onSubmit={submitHandler}>
         <div className="new-expense__controls">
            <div className="input-group">
               <label>Title</label>
               <input
                  type="text"
                  value={userInput.enteredTitle}
                  onChange={titleChangeHandler} 
                  />
            </div>
            <div className="input-group">
               <label>Amount</label>
               <input 
               type="number" 
               value={userInput.enteredAmount}
               onChange={amountChangeHandler} min="0.01" step="0.01" 
               />
            </div>
            <div className="input-group">
               <label>Date</label>
               <input type="date" 
               onChange={dateChangeHandler} 
               value={userInput.enteredDate}
               min="2019-01-01" 
               max="2022-12-31" 
               />
            </div>
         </div>
         <div className="new-expense__actions">
            <button onClick={props.closeForm} type="button">Cancel</button>
            <button type="submit">Add Expense</button>
         </div>
      </form>

   );
}

export default ExpenseForm;