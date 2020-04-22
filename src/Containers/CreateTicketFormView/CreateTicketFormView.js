import React from 'react';
import TicketForm from '../../Components/TicketForm';

import styles from './CreateTicketFormView.module.css';

const CreateTicketFormView = (props) => {

    return (
        <div className={styles.createTicketContainer}>
            <TicketForm requestType='post'
                issue=''
                severity=''
                assignedTo=''
                status=''
                description=''
                btnText='Create'
                ticketId={null} />
        </div>
    )
}

export default CreateTicketFormView;