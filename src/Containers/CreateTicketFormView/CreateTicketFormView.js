import React from 'react';
import TicketForm from '../../Components/TicketForm/TicketForm';

import styles from './CreateTicketFormView.module.css';

const CreateTicketFormView = (props) => {

    return (
        <div className={styles.createTicketContainer}>
            <TicketForm 
                requestType='post'
                issue='Issue'
                severity=''
                assignedTo='Assign'
                status=''
                description='Description'
                btnText='Create'
                ticketId={null} />
        </div>
    )
}

export default CreateTicketFormView;