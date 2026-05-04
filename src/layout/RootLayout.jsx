/*step-3*/
// import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            {/*step-4*/}
            <NavBar/> 
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;