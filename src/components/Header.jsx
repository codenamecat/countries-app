import React from 'react';
import moonIcon from '../images/moon-outline.svg';
import sunIcon from '../images/icon-sun.svg';

export default function Header(props) {

    // const [darkMode, setDarkMode] = React.useState(localStorage.getItem('darkTheme')); //check this later to be sure it works as intended

    React.useEffect(() => {
        props.darkMode ? localStorage.setItem('darkTheme', true) : localStorage.removeItem('darkTheme');
    }, [props.darkMode])

    function toggleMode() {
        props.darkMode ? props.setDarkMode(false) : props.setDarkMode(true);
    }

    return (
        <header className={props.darkMode ? 'dark' : ''}>
            <h1>Where in the world?</h1>
            <button className={`mode-toggler ${props.darkMode ? 'dark' : ''}`} onClick={toggleMode}>
                <img src={props.darkMode ? sunIcon : moonIcon} className='mode-icon' /> {props.darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
}
