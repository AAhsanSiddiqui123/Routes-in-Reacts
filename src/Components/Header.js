import React, { useContext } from 'react';
import AuthContext from "../Store/authContext";
import { Navigate, Link } from 'react-router-dom';

const Header = () => {
    const authCtx = useContext(AuthContext);
    function logoutHandler(params) {
        authCtx.activeUserHandler("user")
    }
    return (
        <div style={{ height: "80px", background: "#EA4335", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <Link to="/home" style={{ marginLeft: "5px" }}>Home</Link>
            <Link to="/login" style={{ marginLeft: "5px" }}>Login</Link>
            <Link to="/signup" style={{ marginLeft: "5px" }}>Signup</Link>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Header
