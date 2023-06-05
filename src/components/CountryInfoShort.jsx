import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryInfoShort(props) {
    return (
        <div>
            <Link to={props.name}>
                <img src={props.flagImg} alt={`The flag of ${props.name}`} className="flag-img" />
                <h2>{props.name}</h2>
                <ul>
                    <li>Population: {props.population}</li>
                    <li>Region: {props.region}</li>
                    <li>Capital: {props.capital}</li>
                </ul>
            </Link>
        </div>
    )
}