import React from 'react';
import TicketForm from '../../Components/TicketForm/TicketForm';
import Modal from '../../Components/Modal/Modal';

class UpdateTicketFormView extends React.Component {

    render() {
        return(
            <Modal>
                <TicketForm requestType='put' 
                issue=''
                severity=''
                assignedTo=''
                status=''
                description=''
                ticketId={this.props.match.params.ticketID}
                btnText='Save'/>
            </Modal>
        )
    }
}

export default UpdateTicketFormView;