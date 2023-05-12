import React from 'react'
import moonIcon from '../images/icon-moon.svg'

export default function Navbar() {
    return (
        <nav>
            <h1>Where in the world?</h1>
            <button>
                <img src={moonIcon} /> Dark Mode
            </button>
        </nav>
    )
}