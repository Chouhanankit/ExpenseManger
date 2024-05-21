import { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {

    const initialState = {
        transactions: [],
        edit: { transaction: {}, isEdit: false },
        darkMode: false,
    }
    const [state, dispatch] = useReducer(ExpenseReducer, initialState)

    return (
        <ExpenseContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ExpenseContext.Provider>
    )

}

export default ExpenseContext;