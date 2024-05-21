import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { deleteTransaction, editTransaction } from '../context/ExpenseAction';

function ListItem({ transaction }) {

    const { dispatch } = useContext(ExpenseContext);

    const handleDelete = (id) => {
        const data = deleteTransaction(id);
        dispatch({
            type: "DELETE",
            payload: data,
        });
    };

    const handleEdit = (oldTransaction) => {
        const data = editTransaction(oldTransaction);
        dispatch({
            type: "EDIT",
            payload: data,
        })
    }

    

    return (
        <li className="list-group-item shadow-sm p-3 my-1" >
            <h1 className='display-5 '>{transaction.text}:{transaction.amount}</h1>
            <span className="float-end">
                <button className="btn btn-warning btn-sm mx-2" onClick={() => handleEdit(transaction)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(transaction.id)}>Delete</button>
            </span>
        </li>
    )
}

export default ListItem