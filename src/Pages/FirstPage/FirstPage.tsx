import React, {FormEvent, useEffect, useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const FirstPage = () => {
    const [disable, setdisable] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);
    const storedData = localStorage.getItem('user-auth-info');
    const navigate = useNavigate();

    useEffect(()=>{
        if(storedData){
            setdisable(!disable);
        }
    },[]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = formRef.current;
        if (!formData) return;
        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const phone = form.get('phone');
        const userAuth = {
            name, email, phone
        };
        localStorage.setItem('user-auth-info', JSON.stringify(userAuth));
        formData.reset();
        setdisable(!disable);
        navigate('/second+page');
    }

    return (
        <div>
            <h1 style={{ fontSize: '3rem', textAlign:'center',marginBottom:'.8rem' }}>This is the first page</h1>
            <nav style={{ marginBottom: '2rem', textAlign:'center' }}>
                <Button href='/second+page' variant="contained">Move to the Second Page</Button>
            </nav>
            <form ref={formRef} onSubmit={handleSubmit} style={{maxWidth:'600px', margin:'0 auto'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            name='name'
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name='phone'
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name='email'
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type="email"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            disabled={disable}
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Submit & Move to the Second page
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default FirstPage;