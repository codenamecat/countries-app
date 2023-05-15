import React from 'react'

export default function CountryInfoShort(props) {
    return (
        <div>
            <img src={props.flagImg} alt={`The flag of ${props.name}`} className="flag-img" />
            <h2>{props.name}</h2>
            <ul>
                <li>Population: {props.population}</li>
                <li>Region: {props.region}</li>
                <li>Capital: {props.capital}</li>
            </ul>
        </div>
    )
}