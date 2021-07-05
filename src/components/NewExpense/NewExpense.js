import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

function NewExpense(props) {

   function onSubmitExpenseDataHandler (expenseData) {

      expenseData = {
         ...expenseData,
         id: Math.trunc(Math.random()*100).toString()
      }

      props.onAddExpense(expenseData);
   }

   return (
      <Card className="new-expense">
         <ExpenseForm onSubmitExpenseData={onSubmitExpenseDataHandler}/>
      </Card>

   );
}

export default NewExpense;