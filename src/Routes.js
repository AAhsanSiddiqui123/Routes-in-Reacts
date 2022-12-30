import React, { Fragment, useContext } from 'react';
import { Route, Routes } from 'react-router';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SigninPage from "./pages/SigninPage";
import AuthContext from './Store/authContext';
import AdminLayout from './pages/AdminLayout';

const RoutesMain = () => {
    const authCtx = useContext(AuthContext);

    let activeUser = authCtx.activeUser;
    let routs;

    if (activeUser === "admin") {

        routs = (<Routes>
            <Route path="/" element={<AdminLayout />} >
                <Route path="/Home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
        </Routes>)

    } else {
        routs = (<Routes>
            <Route path="/" element={<SigninPage />} />
        </Routes>)
    }





    return (
        <Fragment>
            {/* {
                activeUser === 'admin' ?
                    <>
                        <Header />
                        <SideBar />
                    </> : ''
            } */}

            {routs}
        </Fragment>

    )
}

export default RoutesMain
