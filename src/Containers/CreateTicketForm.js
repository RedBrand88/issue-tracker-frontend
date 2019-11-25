import React from 'react';
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


export default function CreateTicketForm() {
    const [urgency, setUrgency] = React.useState('Normal');

    const handleChange = event => {
        setUrgency(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        const issue = event.target.elements.issue.value;
        const severity = event.target.elements.severity.value;
        const assignTo = event.target.elements.assignTo.value;
        const description = event.target.elements.description.value;
        console.log(issue + ' ' + severity + ' ' + assignTo + ' ' + description)
    }

    return (
        <Card style={{ margin: 20, padding: 20 }}>
            <form onSubmit={handleFormSubmit} noValidate autoComplete="off">
                <TextField name='issue' id="outlined-basic" label="Issue" variant="outlined" />
                <br />
                <TextField
                    name='severity'
                    id="outlined-select-currency"
                    select
                    label="Urgency"
                    value={urgency}
                    onChange={handleChange}
                    helperText="Please select your urgency"
                    margin="normal"
                    variant="outlined"
                >
                    {urgencyLevels.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <br />
                <TextField name='assignTo' id="outlined-basic" label="Assign" variant="outlined" />
                <br />
                <TextField
                    name='description'
                    id="outlined-textarea"
                    label="Description"
                    multiline
                    style={{ display: 'flex', flexWrap: 'wrap' }}
                    margin="normal"
                    variant="outlined"
                />
                <Button variant="contained" type='submit' color="primary">
                    Create
                </Button>
            </form>
        </Card>
    );
}