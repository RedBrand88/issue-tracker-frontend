import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import 'typeface-roboto';
import { connect } from 'react-redux';
import * as actions from '../Store/Actions/auth';

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
                        <Button color="inherit" onClick={props.logout}>Logout</Button>
                        :
                        <Button color="inherit" href="/login">Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Header);