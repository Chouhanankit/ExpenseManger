import React, { useContext, useEffect, useState } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { saveTransactions, updateTransaction } from '../context/ExpenseAction';

function BalanceSecction() {
    const { transactions, edit, dispatch } = useContext(ExpenseContext);

    const Balance = transactions.reduce((p, c) => {
        return p + c.amount;
    }, 0)


    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (edit.isEdit) {
            const data = updateTransaction({ id: edit.transaction.id, text: text, amount: +amount });
            dispatch({
                type: "UPDATE",
                payload: data,
            })
        } else {
            const data = saveTransactions(text, amount)
            dispatch({
                type: "SAVE",
                payload: data,
            })
        }
        setAmount("");
        setText("");
    }

    useEffect(() => {
        setText(edit.transaction.text);
        setAmount(edit.transaction.amount);
    }, [edit]);

    return (

        <div className="balance">
            <div className="row">
                <div className="col-md-6 col-sm-12 ">
                    <div className="card p-4 bg-danger text-light">
                        <h1 className="display-5 card-title">Balance : </h1>
                        <h1 className="display-4 card-title">{Balance}</h1>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12">
                    <div className="card p-4 my-2">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="number"
                                className="form-control my-2"
                                placeholder="Enter Amount"
                                onChange={(e) => setAmount(e.target.value)}
                                value={amount}
                            />
                            <input
                                type="text"
                                className="form-control my-2"
                                placeholder="Enter Expense"
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                            />
                            <button className="btn btn-success w-100">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BalanceSecction