export  const getAllExpenses=(setExpenses)=>
{
    fetch('http://localhost:3000/api/v2/getexpense')
    .then((response)=>response.json())
    .then((expense_data)=>setExpenses(expense_data.data))
    }
  
export const addExpense=(postData={},callback)=>{

    fetch('http://localhost:3000/api/v2/expense',
    {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(postData),
    })
    
    .then((response)=>response.json())
    .then((data)=>{callback && callback();})
    
    
    
}