import React, { Component } from 'react';

import styles from './TicketForm.module.css';
import TextBox from '../TextBox/TextBox';

class TicketForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urgency: 'normal',
        }
    }

    handleChange = (event) => {
        this.setState({ urgency: event.target.value });
    }

    handleSubmit = (event) => {
        //look into how this was set up on github

    }

    render() {
        return (
            <div className={styles.createForm}>
                <form onSubmit={this.handleSubmit}>
                    <TextBox type='text' default='Title' />
                    <select value={this.state.urgency} onChange={this.handleChange} className={styles.dropDown}>
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>
                    <TextBox type='text' default='Assign' />
                    <textarea placeholder="Add a description for this task..." className={styles.textArea} />
                    <input type="submit" value="Create" />
                </form>
            </div>
        )
                
    }
}

export default TicketForm;