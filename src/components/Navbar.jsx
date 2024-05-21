import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'

function Navbar() {

    const { darkMode, dispatch } = useContext(ExpenseContext);

    const handleTheme = () => {
        dispatch({
            type: "THEME",
            payload: darkMode ? false : true
        })
    };

    return (
        <>
            <nav className={darkMode ? "navbar bg-black" : "navbar bg-danger"}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-light fs-4">Katabook</span>
                    <span>
                        <button className={darkMode ? 'btn btn-sm btn-light text-primary rounded-0' : 'btn btn-sm btn-secondary text-danger rounded-0'} onClick={handleTheme}>{darkMode ? "LIGHT" : "DARK"}</button>
                    </span>
                </div>
            </nav>
            {/* <marquee id="nav-line" width="80%" direction="right" height="100px" scrollamount="4">This is Khatabook App and it manages all your transactions...</marquee> */}
        </>
    )
}

export default Navbar