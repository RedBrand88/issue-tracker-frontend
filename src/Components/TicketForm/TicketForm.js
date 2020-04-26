import React, { Component } from 'react';
import axios from 'axios';

import styles from './TicketForm.module.css';
import TextBox from '../TextBox/TextBox';

class TicketForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urgency: '',
        }
    }

    handleChange = (event) => {
        this.setState({ urgency: event.target.value });
    }

    handleSubmit = (event, requestType, ticketId) => {
        //look into how this was set up on github
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
                .catch(error => console.log(error))
            case 'put':
                return axios.put(`http://${BASE_URL}/issue-tracker/api/${ticketId}/`, {
                    issue: issue,
                    severity: severity,
                    assignedTo: assignedTo,
                    status: status,
                    description: description
                })
                .catch(error => console.log(error))
            default:
                console.log('ran defualt case');
        }
    }

    render() {
        return (
            <div className={styles.createForm}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Issue" className={styles.textFields} value={this.props.issue}/>
                    <select value={this.props.urgency} onChange={this.handleChange} className={styles.dropDown}>
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>
                    <input type='text' placeholder='Assign' className={styles.textFields} value={this.props.assignedTo}/>
                    <textarea 
                        placeholder="Add a description for this task..." 
                        rows='6' 
                        className={styles.textFields} 
                        value={this.props.description}
                    />
                    <input type="submit" value={this.props.btnText} />
                </form>
            </div>
        )
                
    }
}

export default TicketForm;