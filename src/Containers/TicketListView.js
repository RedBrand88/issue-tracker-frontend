import React from 'react';
import axios from 'axios';
import { List, Paper } from '@material-ui/core';
import TicketList from '../Components/TicketListItem';


class TicketListView extends React.Component {
    state = {
        tickets: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/issue-tracker/api/')
            .then(res => {
                this.setState({
                    tickets: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <Paper style={{ margin: 'auto', marginTop: 100, marginBottom: 50, overflowy: 'auto', width: '75%' }}>
                <List>
                    {this.state.tickets.map(({ issue }) => <TicketList issue={issue} />)}
                </List>
            </Paper>
        )
    }
}


export default TicketListView;