import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Ticket from '../../Components/Ticket/Ticket';

import AddIcon from '../../assets/add_circle.svg';

import styles from './TicketListView.module.css';
import SearchBar from '../../Components/SearchBar/SearchBar';




class TicketListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            search: ''
        }
    }

    componentDidMount() {
        // const BASE_URL = 'localhost:8000';
        const BASE_URL = 'api.theprojectforge.com';
        axios.get(`http://${BASE_URL}/issue-tracker/api/`)
            .then(res => {
                this.setState({
                    tickets: res.data
                });
            })
    }

    changeSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        const filteredTickets = this.state.tickets.filter(ticket => {
            return ticket.issue.toLowerCase().includes(this.state.search.toLowerCase())
        });
        return (
            <div className={styles.listContainer}>
                <div className={styles.toolBar}>
                    <SearchBar changeSearch={this.changeSearch} value={this.state.search}/>
                    <Link to='/create-ticket'>
                        <img src={AddIcon} className='addIcon' alt='add ticket icon'/>
                    </Link>
                </div>
                <div>
                    {filteredTickets.map(({ issue, status, id, severity }) =>
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