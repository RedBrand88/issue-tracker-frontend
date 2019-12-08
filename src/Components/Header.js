import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import 'typeface-roboto';

function Header(props) {
    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ background: 'linear-gradient(140deg, #020024 30%, #8e3508 70%, #f9ff00 100%' }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" style={{ flexGrow: 1 }}>
                        Code Forge
                    </Typography>
                    {
                        props.isAuthenticated ?
                        <Button color="inherit">Logout</Button>
                        :
                        <Button color="inherit" href="/login">Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;