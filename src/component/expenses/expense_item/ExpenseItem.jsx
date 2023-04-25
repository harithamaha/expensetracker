import React from "react";
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";

import { useState } from "react";


const ExpenseItem=(props)=>{
   //console.log('ExpenseItem',props);
   const{title,amount,date}=props;
//    let[ modified_title,setModifiedTitle]=useState(title);
//    const onTitleChange=()=>{
//    setModifiedTitle("Updated");
//     console.log(modified_title);
//    }
//  const month=date.toLocaleString('en-US',{month:'long'});
// const day=date.toLocaleString('en-US',{day:'numeric'});
// const year=date.getFullYear();
    return(
 <li>
        <div className="expense-item"> 
            <ExpenseDate date={date}/>
            
                <div className="expense-item__description">
              <h2>{title}</h2>    
              <div className="expense-item__price">${amount}</div>  
                </div>
          {/* <button onClick={onTitleChange}>Update</button> */}
        </div>
        
</li>
    );
};
export default ExpenseItem;
