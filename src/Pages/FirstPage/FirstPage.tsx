import React from 'react';
import Button from '@mui/material/Button';

const FirstPage = () => {
    return (
        <div>
            <h1 style={{fontSize:'3rem',marginBottom:'.8rem'}}>This is first page</h1>
            <nav>
                <Button href='/second+page' variant="contained">Second Page</Button>
            </nav>

        </div>
    );
};

export default FirstPage;