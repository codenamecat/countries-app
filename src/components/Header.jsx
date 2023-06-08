import React from 'react'
import moonIcon from '../images/moon-outline.svg'

export default function Header() {
    return (
        <header>
            <h1>Where in the world?</h1>
            <button className="mode-toggler">
                <img src={moonIcon} className="mode-icon" /> Dark Mode
            </button>
        </header>
    )
}