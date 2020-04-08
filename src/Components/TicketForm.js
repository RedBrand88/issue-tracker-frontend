import React from 'react';
import axios from 'axios';
import { TextField, MenuItem, Button, Card } from '@material-ui/core';

const urgencyLevels = [
    {
        value: 'Normal',
        label: 'Normal',
    },
    {
        value: 'Low',
        label: 'Low',
    },
    {
        value: 'High',
        label: 'High',
    },
    {
        value: 'Urgent',
        label: 'Urgent',
    },
];


class CreateTicketForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            urgency: 'Normal'
        };
    }

    handleChange = (event) => {
        this.setState({
            urgency: event.target.value
        });
    };

    handleFormSubmit = (event, requestType, ticketID) => {
        const issue = event.target.elements.issue.value;
        const severity = event.target.elements.severity.value;
        const assignedTo = event.target.elements.assignedTo.value;
        const status = 'Open';
        const description = event.target.elements.description.value;
        const BASE_URL = 'api.theprojectforge.com';

        switch( requestType ) {
            case 'post':
                return axios.post(`http://${BASE_URL}/issue-tracker/api/`, {
                    issue: issue,
                    severity: severity,
                    assignedTo: assignedTo,
                    status: status,
                    description: description
                })
                .then(res => console.log(res))
                .catch(error => console.log(error))
            case 'put':
                return axios.put(`http://${BASE_URL}/issue-tracker/api/${ticketID}/`, {
                    issue: issue,
                    severity: severity,
                    assignedTo: assignedTo,
                    status: status,
                    description: description
                })
                .then(res => console.log(res))
                .catch(error => console.log(error))
            default:
                console.log('ran defualt case');
        }
    }

    render() {

        return (
            <Card style={{ margin: 20, padding: 20 }}>
                <form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.id
                )} 
                noValidate autoComplete="off">
                    <TextField name='issue' 
                    id="standard-helperText" 
                    label="Issue" 
                    variant="outlined" 
                    defaultValue={this.props.issue} 
                    />
                    <br />
                    <TextField
                        name='severity'
                        select
                        label="Urgency"
                        value={this.state.urgency}
                        onChange={this.handleChange}
                        helperText="Please select your urgency"
                        margin="normal"
                        variant="outlined"
                        defaultValue={this.props.severity}
                    >
                        {urgencyLevels.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br />
                    <TextField name='assignedTo' 
                    id="standard-helperText" 
                    defaultValue={this.props.assignedTo} 
                    label="Assign" 
                    variant="outlined" />
                    <br />
                    <TextField
                        name='description'
                        id="outlined-multiline-static"
                        label="Description"
                        rows="4"
                        multiline
                        style={{ display: 'flex', flexWrap: 'wrap' }}
                        margin="normal"
                        variant="outlined"
                        defaultValue={this.props.description}
                    />
                    <Button variant="contained" type='submit' color="primary">
                        {this.props.btnText}
                    </Button>
                </form>
            </Card>
        );
    }
}

export default CreateTicketForm;