import React from 'react';
import axios from 'axios';
import { List, Paper } from '@material-ui/core';
import TicketList from '../Components/TicketListItem';




class TicketListView extends React.Component {
    state = {
        tickets: []
    }

    componentDidMount() {
        const BASE_URL = 'theprojectforge.com';
        axios.get(`http://${BASE_URL}:8000/issue-tracker/api/`)
            .then(res => {
                this.setState({
                    tickets: res.data
                });
            })
    }

    render() {
        return (
            <React.Fragment>
                <Paper style={{ margin: 'auto', marginBottom: 50, overflowy: 'auto', width: '75%' }}>
                    <List>
                        {this.state.tickets.map(({ issue, status, id }) => <TicketList issue={issue} status={status} key={id} id={id}/>)}
                    </List>
                </Paper>
            </React.Fragment>
        )
    }
}


export default TicketListView;