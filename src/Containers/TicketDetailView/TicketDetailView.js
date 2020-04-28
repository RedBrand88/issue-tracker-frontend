import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import TicketForm from '../../Components/TicketForm/TicketForm';
import IconButton from '../../Components/IconButton/IconButton';
import Button from '../../Components/Button/Button';
import Modal from '../../Components/Modal/Modal';

import EditPencilIcon from '../../assets/edit_pencil.svg';
import CloseIcon from '../../assets/close_icon.svg';

import styles from './TicketDetailView.module.css';

class TicketDetailView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ticket: {},
            modal: 'closed'
        }
    }

    componentDidMount() {
        const ticketID = this.props.match.params.ticketID;
        // const BASE_URL = 'api.theprojectforge.com';
        const BASE_URL = 'localhost:8000';
        axios.get(`http://${BASE_URL}/issue-tracker/api/${ticketID}/`)
            .then(res => {
                this.setState({
                    ticket: res.data
                });
            })
    }

    closeTicket(event, props, state) {
        const BASE_URL = 'localhost:8000';
        // const BASE_URL = 'api.theprojectforge.com';
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

    handleOpen = () => {
        this.setState({
            modal: 'open'
        });
    }

    handleClose = () => {
        this.setState({
            modal: 'closed'
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.rowWithButtons}>
                    <span>
                        Issue: {this.state.ticket.issue}
                    </span>
                    <div className={styles.buttons}>
                        <IconButton onClick={this.handleOpen}>
                            <img src={EditPencilIcon} alt='edit pencil icon' />
                        </IconButton>
                        <Link to='/view-tickets'>
                            <img src={CloseIcon} alt='exit button' />
                        </Link>
                        <Modal open={this.state.modal} onClose={this.handleClose}>
                            <TicketForm 
                                btnText='save'
                                id={this.state.ticket.id}
                                issue={this.state.ticket.issue}
                                urgency={this.state.ticket.severity}
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
                <div className={styles.rowWithButtons}>
                    <span>
                        Status: {this.state.ticket.status}
                    </span>
                    <div>
                        <Button 
                            onClick={(event) => this.closeTicket(
                                event,
                                this.props,
                                this.state
                            )} 
                            text='Close'
                            type='button' 
                        />
                    </div>
                </div>
                <p>Description: {this.state.ticket.description}</p>
            </div>
        )
    }
}


export default TicketDetailView;