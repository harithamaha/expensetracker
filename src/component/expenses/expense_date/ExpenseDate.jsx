import React from "react";
// import ExpenseDate from "../expense_item/ExpenseItem";
import "./ExpenseDate.css"
const ExpenseDate=(props)=>{
    const {date}=props;
    let dateObject=new Date(date)
    
    return(
        <div className="expense-date">
        <div className="expense-date__month">{dateObject.toLocaleString('en-US',{month:'long'})}</div>
        <div className="expense-date__day">{dateObject.toLocaleString('en-US',{day:'numeric'})}</div>
        <div className="expense-date__year">{dateObject.getFullYear()}</div>
        </div>
    )
}
export default ExpenseDate;