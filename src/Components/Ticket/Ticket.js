import React from 'react';
import 'typeface-roboto';
import axios from 'axios';

import IconButton from '../IconButton/IconButton';
import Avatar from '../Avatar/Avatar';
import TicketForm from '../TicketForm/TicketForm';
import Modal from '../Modal/Modal';

import EditPencilIcon from '../../assets/edit_pencil.svg';
import OpenTicketIcon from '../../assets/open_ticket.svg';
import ClosedTicketIcon from '../../assets/circle_check.svg';

import cx from 'classnames';
import styles from './Ticket.module.css';

class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 'closed',
            ticket: {}
        };
    }

    handleEdit = () => {
        const BASE_URL = 'api.theprojectforge.com';
        axios.get(`http://${BASE_URL}/issue-tracker/api/${this.props.id}/`)
            .then(res => {
                this.setState({
                    ticket: res.data,
                    open: 'open'
                });
            })
    };

    handleClose = () => {
        this.setState({
            open: 'closed'
        });
    };

    render() {
        return (
            <div className={ cx(styles.ticket, styles[this.props.severity], styles[this.props.status])}>
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
                <a href={'/view-ticket/' + this.props.id}>
                    <span className={styles.puesdoLink}></span>
                </a>
                <IconButton onClick={this.handleEdit}>
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
            </div>
        );
    }
}

export default Ticket;