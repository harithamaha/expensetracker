import React,{useState} from "react";
import './NewExpenseForm.css';

const NewExpenseForm=(props)=>{
    const{save}=props;
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    
    const [date,setDate]=useState('');
    
    const onTitleChangeHandler=(event)=>{
        setTitle(event.target.value);
    }
    const onAmountChangeHandler=(event)=>{
        setAmount(event.target.value);
    }
    const onDateChangeHandler=(event)=>{
        setDate(event.target.value);
    }
    const onSubmitHandler=(event)=>{
    event.preventDefault();
const new_expense={
    title,
    amount,
    date:new Date(date),
    }

save(new_expense);}
return(
    
    
        <form onSubmit={onSubmitHandler} ><div className="new-expense__controls">
            <div className="new-expense__control">
          <label htmlFor='expense_title'> Title:</label> 
            <input type="text" name='title'id='expense_title' onChange={onTitleChangeHandler} value={title}>
                
            </input></div>
         <div className="new-expense__control" >  
         <label htmlFor='expense_amount'>  Amount:</label> 
            <input type='number' min='0'max='1000' name='amount'id='expense_amount' onChange={onAmountChangeHandler} value={amount}></input>   </div>
        <div className="new-expense__control">  <label htmlFor='expense_date'> Date:</label> 
            <input type="date" name='date'id='expense_date' onChange={onDateChangeHandler} value={date}></input></div></div> 
       <div className="new-expense__actions">    <button type='reset'>Cancel</button>
            <button type='submit'>Add Expense</button></div>  
        </form>

    
)       
}
 export default NewExpenseForm