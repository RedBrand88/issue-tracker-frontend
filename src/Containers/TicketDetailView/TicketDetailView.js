import React from 'react';
import axios from 'axios';
import { Modal } from '@material-ui/core';
import TicketForm from '../../Components/TicketForm';
import IconButton from '../../Components/IconButton/IconButton';
import Button from '../../Components/Button/Button';

import EditPencilIcon from '../../assets/edit_pencil.svg';

import styles from './TicketDetailView.module.css';

class TicketDetailView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ticket: {},
            open: false
        }
    }

    componentDidMount() {
        const ticketID = this.props.match.params.ticketID;
        const BASE_URL = 'api.theprojectforge.com';
        axios.get(`http://${BASE_URL}/issue-tracker/api/${ticketID}/`)
            .then(res => {
                this.setState({
                    ticket: res.data
                });
            })
    }

    closeTicket(event, props, state) {
        const BASE_URL = 'api.theprojectforge.com';
        axios.put(`http://${BASE_URL}/issue-tracker/api/${props.match.params.ticketID}/`, {
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
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <span>
                        Issue: {this.state.ticket.issue}
                    </span>
                    <div className={styles.buttons}>
                        <Button onClick={(event) => this.closeTicket(
                            event,
                            this.props,
                            this.state
                        )} text='Close'/>
                        <IconButton onClick={this.handleOpen}>
                            <img src={EditPencilIcon} alt='edit pencil icon' />
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
                    </div>
                </div>
                <p>Urgency: {this.state.ticket.severity}</p>
                <p>Assigned To: {this.state.ticket.assignedTo}</p>
                <p>Status: {this.state.ticket.status}</p>
                <p>Description: {this.state.ticket.description}</p>
            </div>
        )
    }
}


export default TicketDetailView;