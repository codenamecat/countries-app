import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryInfoShort(props) {

    const formatPopulation = new Intl.NumberFormat().format(props.population);

    return (
        <div className={`country-card ${props.darkMode ? 'dark' : ''}`}>
            <Link to={props.name} className={props.darkMode ? 'dark' : ''}>
                <img src={props.flagImg} alt={`The flag of ${props.name}`} className={`flag-img ${props.darkMode ? 'dark' : ''}`} />
                <div className='country-info-short'>
                    <h2 className='country-name'>{props.name}</h2>
                    <ul>
                        <li><span className='data-title'>Population:</span> {formatPopulation || 'n/a'}</li>
                        <li><span className='data-title'>Region:</span> {props.region || 'n/a'}</li>
                        <li><span className='data-title'>Capital:</span> {props.capital || 'n/a'}</li>
                    </ul>
                </div>
            </Link>
        </div>
    )
}