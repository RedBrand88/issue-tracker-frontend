import React from 'react';
import {
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    Avatar,
    Divider,
    IconButton,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import FolderIcon from '@material-ui/icons/Folder';
import 'typeface-roboto';

export function editTicket(event) {
    event.preventDefault();
    console.log('edit button clicked');
}

function TicketList(props) {
    return (
        <React.Fragment>
            <Divider />
            <ListItem button component='a' href={'http://localhost:3000/view-ticket/' + props.id}>
                <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={props.issue}
                    secondary={props.status}
                />
                <ListItemSecondaryAction>
                    <IconButton onClick={editTicket} edge="end" aria-label="delete">
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </React.Fragment>
    );
}

export default TicketList;