import React from 'react';
import axios from 'axios';
import { Paper, Divider, IconButton, Button, Modal } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import TicketForm from '../Components/TicketForm';


class TicketDetailView extends React.Component {
    state = {
        ticket: {},
        open: false
    }

    componentDidMount() {
        const ticketID = this.props.match.params.ticketID;
        const BASE_URL = 'theprojectforge.com';
        axios.get(`http://${BASE_URL}:8000/issue-tracker/api/${ticketID}/`)
            .then(res => {
                this.setState({
                    ticket: res.data
                });
            })
    }

    closeTicket(event, props, state) {
        const BASE_URL = 'theprojectforge.com';
        axios.put(`http://${BASE_URL}:8000/issue-tracker/api/${props.match.params.ticketID}/`, {
            id: state.ticket.id,
            issue: state.ticket.issue,
            severity: state.ticket.severity,
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

    handleOpen = () => this.setState({
        open: true
    });

    handleClose = () => this.setState({
        open: false
    });

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
                    <IconButton onClick={this.handleOpen} style={{ float: 'right' }} edge="end">
                        <EditIcon />
                    </IconButton>
                    <Modal open={this.state.open} onClose={this.handleClose}>
                            <TicketForm btnText='save'
                                id={this.state.ticket.id}
                                issue={this.state.ticket.issue}
                                severity={this.state.ticket.severity}
                                status={this.state.ticket.status}
                                assignedTo={this.state.ticket.assignedTo}
                                description={this.state.ticket.description}
                                requestType='put'
                            />
                        </Modal>
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