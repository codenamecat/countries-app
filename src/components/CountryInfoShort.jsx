import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryInfoShort(props) {

    const formatPopulation = new Intl.NumberFormat().format(props.population);

    return (
        <div>
            <Link to={props.name} state={{countryCode: props.code}}>
                <img src={props.flagImg} alt={`The flag of ${props.name}`} className="flag-img" />
                <h2>{props.name}</h2>
                <ul>
                    <li>Population: {formatPopulation}</li>
                    <li>Region: {props.region}</li>
                    <li>Capital: {props.capital}</li>
                </ul>
            </Link>
        </div>
    )
}