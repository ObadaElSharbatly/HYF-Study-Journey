import React from 'react'
import ExpenseItem from './expenseItem';
import { MdDelete } from "react-icons/md";

const ExpenseList = ({expenses}) => {
    return (
        <>
            <ul className="list">
                {expenses.map( expense => {
                    return (
                        <ExpenseItem key={expense.id} expense={expense} />
                    )
                })}
            </ul>
            {expenses.length > 0 && 
            <button className="btn"> 
                clear expenses
                <MdDelete className="btn-icon"/>
            </button>}
        </>
    )
}

export default ExpenseList;