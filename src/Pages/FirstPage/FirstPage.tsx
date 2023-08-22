import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const FirstPage = () => {
    return (
        <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '.8rem' }}>This is first page</h1>
            <nav style={{ marginBottom: '.8rem' }}>
                <Button href='/second+page' variant="contained">Second Page</Button>
            </nav>
            <form>
                <Grid container style={{maxWidth:'600px'}} spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
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
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default FirstPage;