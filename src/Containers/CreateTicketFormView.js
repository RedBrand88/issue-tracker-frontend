import React from 'react';
import TicketForm from '../Components/TicketForm';

class CreateTicketFormView extends React.Component {

    render() {
        return(
            <TicketForm requestType='post' 
            issue=''
            severity=''
            assignedTo=''
            status=''
            description=''
            btnText='Create'
            ticketId={null}/>
        )
    }
}

export default CreateTicketFormView;