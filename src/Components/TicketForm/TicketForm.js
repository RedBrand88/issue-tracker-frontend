import React, { Component } from 'react';
import axios from 'axios';

import styles from './TicketForm.module.css';

class TicketForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            issue: '',
            urgency: 'Normal',
            assignedTo: '',
            status: 'Open',
            description: ''
        }
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeIssue = this.handleChangeIssue.bind(this);
        this.handleChangeAssign = this.handleChangeAssign.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(this.props.id !== prevProps.id) {
            this.setState({
                id: this.props.id,
                issue: this.props.issue,
                urgency: this.props.urgency,
                assignedTo: this.props.assignedTo,
                description: this.props.description
            })
        }
    }

    handleChangeSelect = (event) => {
        this.setState({ urgency: event.target.value });
    }

    handleChangeIssue = (event) => {
        this.setState({ issue: event.target.value });
    }

    handleChangeAssign = (event) => {
        this.setState({ assignedTo: event.target.value });
    }

    handleChangeDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    handleSubmit = (event, requestType, ticketId) => {
        event.preventDefault();
        const issue = event.target.elements.issue.value;
        const urgency = event.target.elements.urgency.value;
        const assignedTo = event.target.elements.assignedTo.value;
        const status = 'Open';
        const description = event.target.elements.description.value;
        const BASE_URL = 'api.theprojectforge.com';
        // const BASE_URL = 'localhost:8000';

        switch( requestType ) {
            case 'post':
                return axios.post(`http://${BASE_URL}/issue-tracker/api/`, {
                    issue: issue,
                    severity: urgency,
                    assignedTo: assignedTo,
                    status: status,
                    description: description
                })
                .then(res => console.log(res))
                .catch(error => console.error(error))
            case 'put':
                return axios.put(`http://${BASE_URL}/issue-tracker/api/${ticketId}/`, {
                    issue: issue,
                    severity: urgency,
                    assignedTo: assignedTo,
                    status: status,
                    description: description
                })
                .then(res => console.log(res))
                .catch(error => console.error(error))
            default:
                console.log('ran defualt case');
        }
    }

    render() {
        return (
            <div className={styles.createForm}>
                <form onSubmit={(event) => this.handleSubmit(event, this.props.requestType, this.props.id)}>
                    <input 
                        name='issue'
                        type='text' 
                        placeholder='Issue' 
                        className={styles.textFields} 
                        value={this.state.issue} 
                        onChange={this.handleChangeIssue}
                    />
                    <select 
                        name='urgency' 
                        value={this.state.urgency} 
                        onChange={this.handleChangeSelect} 
                        className={styles.dropDown}
                    >
                        <option>Low</option>
                        <option>Normal</option>
                        <option>High</option>
                        <option>Urgent</option>
                    </select>
                    <input 
                        name='assignedTo'
                        type='text' 
                        placeholder='Assign to...' 
                        className={styles.textFields} 
                        value={this.state.assignedTo}
                        onChange={this.handleChangeAssign}
                    />
                    <textarea 
                        name='description'
                        placeholder='Add a description for this task...' 
                        rows='6' 
                        className={styles.textFields} 
                        value={this.state.description}
                        onChange={this.handleChangeDescription}
                    />
                    <input type='submit' className={styles.btn} value={this.props.btnText} />
                </form>
            </div>
        )
                
    }
}

export default TicketForm;