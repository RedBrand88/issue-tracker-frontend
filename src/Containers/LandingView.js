import React from 'react';
import Landing from '../Components/Landing';
import Grid from '@material-ui/core/Grid';
import Breadcrumb from '../Components/Breadcrumb';

class LandingView extends React.Component {
    render() {
        return (
            <Grid container spacing={3} style={{ background: '#020024' }}>
                <Grid item xs={12}>
                    <div style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto', marginTop: 100 }}>
                        <Breadcrumb />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Landing />
                </Grid>
            </Grid>
        );
    }
}

export default LandingView;