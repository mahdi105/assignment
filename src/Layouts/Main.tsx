import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

const Main = () => {
    return (
        <div>
            <CssBaseline></CssBaseline>
            <Container maxWidth='xl'>
                <Outlet />
            </Container>
        </div>
    );
};

export default Main;