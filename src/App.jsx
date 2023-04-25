import React, { useEffect,useState } from 'react';
import './App.css'
import ExpenseItem from './component/expenses/expense_item/ExpenseItem'
import ExpenseList from './component/expenses/expense_list/ExpenseList'
import NewExpense from './component/new_expense/NewExpense';
import Expenses from './component/expenses/expenses';
import { addExpense,getAllExpenses } from './api.js';
// const DUMMY_DATA = [
//   {
//     id: 'e1',
//     title: 'Groceries',
//     amount: 94.12,
//     date: new Date(2021, 7, 14),
//   },
//   { id: 'e2', 
//   title: 'New Mobile', 
//   amount: 799.49, date: new Date(2020, 2, 12)
//  },
//   {
//     id: 'e3',
//     title: 'Car Repair',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New work desk',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

function App() {
  const [expenses,setExpenses]=useState('')
  const add=(expense)=>{
    console.log('App',expense)
  
    addExpense(expense,()=>{
    setExpenses((previous_expenses)=>{
      return [...previous_expenses,expense]
    })
  }
  );

    // DUMMY_DATA .push(expense);
    // console.log('Harini',DUMMY_DATA);
  }

  useEffect(()=>{
    getAllExpenses(setExpenses);

  },[])
 return (
  
    <div className="App">

      <NewExpense submitAction={add}/>
        <Expenses expenses={expenses}/>
        
    </div>
  )
}

export default App