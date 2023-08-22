import React, {FormEvent} from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const FirstPage = () => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const userAuth = {
            name, email, phone
        };
        localStorage.setItem('user-auth-info', JSON.stringify(userAuth));
        form.reset();
    }

    return (
        <div>
            <h1 style={{ fontSize: '3rem', textAlign:'center',marginBottom:'.8rem' }}>This is the first page</h1>
            <nav style={{ marginBottom: '2rem', textAlign:'center' }}>
                <Button href='/second+page' variant="contained">Move to the Second Page</Button>
            </nav>
            <form onSubmit={handleSubmit} style={{maxWidth:'600px', margin:'0 auto'}}>
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