// import React from 'react';

import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        /*step-13*/
        <div className="text-center p-12">
            <h1>404 - Page Not Found</h1>
            <p className="mb-5">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className='bg-[#244D3F] px-4 py-2 rounded-md text-white'>Go back to Home</Link>
        </div>
    );
};

export default NotFoundPage;