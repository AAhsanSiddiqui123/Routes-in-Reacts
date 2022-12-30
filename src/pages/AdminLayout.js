import React, { Fragment } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import SideBar from '../Components/SideBar';


const AdminLayout = () => {
    return (
        <Fragment>
            <Header />
            <div style={{display: "flex"}}>
                <SideBar />
                <Outlet />
            </div>
        </Fragment>
    )
}

export default AdminLayout