import React from 'react';
import img from '../assets/logo512.png';
import { Typography } from '@material-ui/core';

class Landing extends React.Component {

    render() {
        return (
            <div style={{ background: '#020024', height: '600px' }}>
                <div style={{ marignLeft: 'auto', marginRight: 'auto' }}>
                    <img src={img} alt='forge hammer' style={{ height: 512, width: 512 }} />
                    <Typography variant="h2" component="h2" style={{ color: 'white' }}>
                        Track your Team's Project with the Project Forge
                    </Typography>
                </div>
            </div>
        );
    }
}

export default Landing;