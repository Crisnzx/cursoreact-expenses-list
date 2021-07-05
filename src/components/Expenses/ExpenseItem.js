
// default import || named import
import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

// presentational/dumb component
function ExpenseItem(props) {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

// regular variable doesn't tell React this components needs to be called/rendered again
  // useState tells React that when the variable changes the components must be called/rendered again
  // useState is a so-called React hook