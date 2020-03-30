import React from 'react';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Breadcrumb from '../Components/Breadcrumb';

class Layout extends React.Component {

    render() {
        const BASE_URL = 'theprojectforge.com';
        return (
            <Grid container spacing={3} style={{ background: '#020024', color: 'white' }}>
                <Grid item xs={12}>
                    <div style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto', marginTop: 100 }}>
                        <Breadcrumb />
                        <IconButton href={'http://'+BASE_URL+':3000/create-ticket'} style={{ float: 'right', color: 'white' }}>
                            <AddCircleOutlineIcon fontSize='large' />
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    {this.props.children}
                </Grid>
            </Grid>
        );
    }
}

export default Layout;