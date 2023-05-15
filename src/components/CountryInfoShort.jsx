import React from 'react'

export default function CountryInfoShort(props) {
    return (
        <div>
            {/* img goes here */}
            <h2>{props.name}</h2>
            <ul>
                <li>Population: n/a</li>
                <li>Region: {props.region}</li>
                <li>Capital: {props.capital[0]}</li>
            </ul>
        </div>
    )
}