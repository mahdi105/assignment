import React, {ReactNode} from 'react';

interface PrivateRouteProp{
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProp> = ({children}) => {
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default PrivateRoute;