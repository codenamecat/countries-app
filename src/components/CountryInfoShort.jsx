import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryInfoShort(props) {

    const formatPopulation = new Intl.NumberFormat().format(props.population);

    return (
        <div className="country-card">
            <Link to={props.name} state={{ countryCode: props.code }}>
                <img src={props.flagImg} alt={`The flag of ${props.name}`} className="flag-img" />
                <div className="country-info">
                    <h2 className="country-name">{props.name}</h2>
                    <ul>
                        <li><span className="data-title">Population:</span> {formatPopulation || "n/a"}</li>
                        <li><span className="data-title">Region:</span> {props.region || "n/a"}</li>
                        <li><span className="data-title">Capital:</span> {props.capital || "n/a"}</li>
                    </ul>
                </div>
            </Link>
        </div>
    )
}