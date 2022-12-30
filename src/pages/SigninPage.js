import React,{ useContext } from 'react';
import AuthContext from "../Store/authContext";
import { Navigate } from 'react-router-dom';




const SigninPage = () => {
    const authCtx = useContext(AuthContext);

    function userHandler(params) {
        console.log(authCtx.activeUser);
    }

    function adminHandler(params) {
        authCtx.activeUserHandler("admin");
        // redirect("/login");
        <Navigate to="/login" />
    }



    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
            <button onClick={userHandler}>user</button>
            <button onClick={adminHandler} >admin</button>
        </div>
    )
}

export default SigninPage
