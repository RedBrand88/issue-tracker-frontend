import React, { Fragment } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemSecondaryAction,
    Avatar,
    Divider,
    Paper,
    IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import 'typeface-roboto';


function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

function ListView(props) {
    return (
        <Paper style={{ margin: 'auto', marginTop: 100, marginBottom: 50, overflowy: 'auto', width: 500 }}>
            <List>
                {generate(
                    <Fragment>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Single-line item"
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </Fragment>,
                )}
            </List>
        </Paper>
    );
}

export default ListView;