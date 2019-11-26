import React from 'react';
import TicketForm from '../Components/TicketForm';

class CreateTicketFormView extends React.Component {

    render() {
        return(
            <TicketForm requestType='put' 
            issue=''
            severity=''
            assignedTo=''
            status=''
            description=''
            ticketId={this.props.match.params.ticketID}
            btnText='Save'/>
        )
    }
}

export default CreateTicketFormView;