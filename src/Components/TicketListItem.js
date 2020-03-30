import React from 'react';
import {
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    Avatar,
    Divider,
    IconButton,
    Modal
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import FolderIcon from '@material-ui/icons/Folder';
import 'typeface-roboto';
import TicketForm from './TicketForm';
import axios from 'axios';

class TicketList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            ticket: {}
        };
    }

    handleOpen = () => {
        const BASE_URL = 'staging.theprojectforge.com';
        axios.get(`http://${BASE_URL}:8000/issue-tracker/api/${this.props.id}/`)
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

        return (
            <React.Fragment>
                <Divider />
                <ListItem button component='a' href={'http://localhost:3000/view-ticket/' + this.props.id}>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={this.props.issue}
                        secondary={this.props.status}
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={this.handleOpen} edge="end" aria-label="delete">
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
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </React.Fragment>
        );
    }
}

export default TicketList;