import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import 'typeface-roboto';
import { connect } from 'react-redux';
import * as actions from '../Store/Actions/auth';

class Header extends React.Component {
    render() {
        return (
            <div style={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ background: 'linear-gradient(140deg, #020024 30%, #8e3508 70%, #f9ff00 100%' }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" style={{ flexGrow: 1 }}>
                            The Project Forge
                        </Typography>
                        {
                            this.props.isAuthenticated ?
                            <Button color="inherit" onClick={this.props.logout}>Logout</Button>
                            :
                            <Button color="inherit" href="/login">Login</Button>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Header);