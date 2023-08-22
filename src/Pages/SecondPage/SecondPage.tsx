import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';


interface post {
    userId: number,
    id: number,
    title: string,
    body: string,
}
const SecondPage = () => {
    const [posts, setPosts] = useState<post[]>([]);
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90, type:'number' },
        {
            field: 'userId',
            headerName: 'User ID',
            width: 150,
            editable: false,
            type:'number'
        },
        {
            field: 'title',
            headerName: 'Title',
            width: 150,
            editable: false,
        },
        {
            field: 'body',
            headerName: 'Details',
            width: 700,
            editable: false,
        }
    ];
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((data: post[]) => setPosts(data))
            .catch(error => console.log(error.message));
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: "3rem", marginBottom: '2rem' }}>This is the second page.</h1>
            <h1 style={{ textAlign: 'center', fontSize: "1.5rem", marginBottom: '1rem' }}>All posts are retrieved using Jsonplaceholder API.</h1>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={posts}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
};

export default SecondPage;