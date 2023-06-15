import React from 'react';
import moonIcon from '../images/moon-outline.svg';
import sunIcon from '../images/icon-sun.svg';

import { Link } from 'react-router-dom';

export default function Header(props) {

    React.useEffect(() => {
        props.darkMode ? localStorage.setItem('darkTheme', true) : localStorage.removeItem('darkTheme');
    }, [props.darkMode])

    function toggleMode() {
        props.darkMode ? props.setDarkMode(false) : props.setDarkMode(true);
    }

    return (
        <header className={props.darkMode ? 'dark' : ''}>
            <Link to='/'>
                <h1 className={props.darkMode ? 'dark' : ''}>Where in the world?</h1>
            </Link>
            <button className={`mode-toggler ${props.darkMode ? 'dark' : ''}`} onClick={toggleMode}>
                <img src={props.darkMode ? sunIcon : moonIcon} className='mode-icon' /> {props.darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
}
