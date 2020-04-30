import React, { Fragment } from 'react';

import styles from './SearchBar.module.css';

const SearchBar = (props) => {
    return (
        <Fragment>
            <input
                className={styles.searchBar}
                type='search'
                placeholder='Search Tickets...'
                onChange={props.changeSearch}
                value={props.value}
            />
        </Fragment>
    );
}

export default SearchBar;