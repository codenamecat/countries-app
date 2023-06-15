import React from 'react';
import {Link} from 'react-router-dom';

export default function Error(props) {
    return (
        <div className={`error-element ${props.darkMode ? 'dark' : ''}`}>
            <h2>How did you end up here?</h2>
            <Link to='/' className={props.darkMode ? 'dark' : ''}>Home</Link>
        </div>
    )
}