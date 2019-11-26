import React from 'react';
import axios from 'axios';
import { Paper, Divider, IconButton, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { editTicket } from '../Components/TicketListItem';


class TicketDetailView extends React.Component {
    state = {
        ticket: {}
    }

    componentDidMount() {
        const ticketID = this.props.match.params.ticketID;
        axios.get(`http://127.0.0.1:8000/issue-tracker/api/${ticketID}/`)
            .then(res => {
                this.setState({
                    ticket: res.data
                });
            })
    }

    closeTicket(event, props, state) {
        axios.put(`http://127.0.0.1:8000/issue-tracker/api/${props.match.params.ticketID}/`, {
            id: state.ticket.id,
            issue: state.ticket.issue,
            severity: 'Normal',
            assignedTo: state.ticket.assignedTo,
            status: 'Closed',
            description: state.ticket.description
        })
        .then(res => {
            this.setState({
                ticket: res.data
            });
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <Paper style={{ margin: 20, padding: 20 }}>
                <p>
                    Issue: {this.state.ticket.issue}
                    <Button style={{ float: 'right' }} onClick={(event) => this.closeTicket(
                        event,
                        this.props,
                        this.state
                    )} color='secondary'>Close</Button>
                    <IconButton onClick={editTicket} style={{ float: 'right' }} edge="end" aria-label="delete">
                        <EditIcon />
                    </IconButton>
                </p>
                <Divider />
                <p>Urgency: {this.state.ticket.severity}</p>
                <Divider />
                <p>Assigned To: {this.state.ticket.assignedTo}</p>
                <Divider />
                <p>Status: {this.state.ticket.status}</p>
                <Divider />
                <p>Description: {this.state.ticket.description}</p>
            </Paper>
        )
    }
}


export default TicketDetailView;