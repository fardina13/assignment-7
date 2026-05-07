/*step-3*/
// import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            {/*step-4*/}
            <NavBar/> 
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default RootLayout;