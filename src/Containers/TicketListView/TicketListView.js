import React from 'react';
import axios from 'axios';
import Ticket from '../../Components/Ticket/Ticket';
import styles from './TicketListView.module.css';




class TicketListView extends React.Component {
    state = {
        tickets: []
    }

    componentDidMount() {
        const BASE_URL = 'api.theprojectforge.com';
        axios.get(`http://${BASE_URL}/issue-tracker/api/`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    tickets: res.data
                });
            })
    }

    render() {
        return (
            <div className={styles.listContainer}>
                <div>
                    Search Field Component Placeholder
                </div>
                <div>
                    {this.state.tickets.map(({ issue, status, id, severity }) => 
                    <Ticket 
                        issue={issue} 
                        status={status} 
                        severity={severity} 
                        key={id} 
                        id={id} 
                    />)}
                </div>
                <div className={styles.fakePagination}>
                    <span>
                        Page 1
                    </span>
                    <span>
                        place holder pagination
                    </span>
                    <span>
                        {'< 1, 2, 3, >'}
                    </span>
                </div>
            </div>
        )
    }
}


export default TicketListView;