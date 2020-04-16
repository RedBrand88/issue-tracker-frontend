import React from 'react';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

class Layout extends React.Component {

    render() {
        const BASE_URL = 'staging.theprojectforge.com';
        return (
            <div style={{ background: '#020024', color: 'white' }}>
                <div>
                    <div style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto', marginTop: 100 }}>
                        <IconButton href={'http://'+BASE_URL+'/create-ticket'} style={{ float: 'right', color: 'white' }}>
                            <AddCircleOutlineIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;