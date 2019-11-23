import React from 'react';
import axios from 'axios';
import TicketList from '../Components/TicketList';


class TicketListView extends React.Component {
    state = {
        tickets: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
        .then(res => {
            this.setState({
                tickets: res.data
            });
            console.log(res.data);
        })
    }

    render() {
        return (
            <TicketList data={this.state.tickets}/>
        )
    }
}


export default TicketListView;