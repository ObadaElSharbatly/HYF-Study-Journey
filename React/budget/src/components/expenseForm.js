import React from 'react'
import { MdSend } from 'react-icons/md';

const ExpenseForm = () => {
    return (
        <form>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge" > Charge </label>
                    <input type="text" name="charge" id="charge" placeholder="e.g house rent" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount" > amount </label>
                    <input type="number" name="amount" id="amount" placeholder="e.g only number .. 650 " className="form-control" />
                </div>
            </div>
            <button type="submit" className="btn">
                submit
                <MdSend className="btn-icon" />
            </button>
        </form>
    )
}

export default ExpenseForm;