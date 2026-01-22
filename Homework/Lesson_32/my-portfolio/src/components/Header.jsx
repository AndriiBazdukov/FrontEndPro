import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={NavLink} to="/">Home</Button>
                    <Button color="inherit" component={NavLink} to="/todo">TODO</Button>
                    <Button color="inherit" component={NavLink} to="/swapi">SWAPI</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}