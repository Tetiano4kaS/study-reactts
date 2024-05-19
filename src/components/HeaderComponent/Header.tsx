import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.Header}>
            <Link to={'users'}>Users</Link>
            <Link to={'posts'}>Posts</Link>
            <Link to={'comments'}>Comments</Link>
        </div>
    );
};

export default Header;