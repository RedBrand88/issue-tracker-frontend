import React from 'react';
import TicketForm from '../Components/TicketForm';

class CreateTicketFormView extends React.Component {

    render() {
        return(
            <TicketForm requestType='post' ticketId={null}/>
        )
    }
}

export default CreateTicketFormView;