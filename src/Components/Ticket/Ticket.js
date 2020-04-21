import React from 'react';
import {
    Modal
} from '@material-ui/core';
import 'typeface-roboto';
import axios from 'axios';

import IconButton from '../IconButton/IconButton';
import Avatar from '../Avatar/Avatar';
import TicketForm from '../TicketForm';

import EditPencilIcon from '../../assets/edit_pencil.svg';
import OpenTicketIcon from '../../assets/open_ticket.svg';
import ClosedTicketIcon from '../../assets/circle_check.svg';

import styles from './Ticket.module.css';

class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            ticket: {}
        };
    }

    handleOpen = () => {
        const BASE_URL = 'api.theprojectforge.com';
        axios.get(`http://${BASE_URL}/issue-tracker/api/${this.props.id}/`)
            .then(res => {
                this.setState({
                    ticket: res.data,
                    open: true
                });
            })
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        const BASE_URL = 'staging.theprojectforge.com';
        return (
            <a href={'/view-ticket/' + this.props.id} className={styles.ticket}>
                <div className={styles.ticketBody}>
                    {this.props.status === 'Open' ?
                        <Avatar size='small' color={this.props.status}>
                            <img src={OpenTicketIcon} alt='open ticket icon' />
                        </Avatar> :
                        <Avatar size='small' color={this.props.status}>
                            <img src={ClosedTicketIcon} alt='closed ticket icon' />
                        </Avatar>
                    }
                    <span>
                        <h3>
                            {this.props.issue}
                        </h3>
                        <p>
                            {this.props.status}
                        </p>
                    </span>
                </div>
                <IconButton onClick={this.handleOpen}>
                    <img src={EditPencilIcon} alt='Edit Icon' />
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
            </a>
        );
    }
}

export default Ticket;