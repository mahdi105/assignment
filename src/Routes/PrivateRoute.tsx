import React, { ReactNode } from 'react';
import { Navigate } from "react-router-dom";

interface PrivateRouteProp {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProp> = ({ children }) => {
    const storedUserData = localStorage.getItem('user-auth-info');
    if (!storedUserData) {
        alert('Please provide your information');
        return <Navigate to='/' replace={true}></Navigate> ;
    }
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default PrivateRoute;