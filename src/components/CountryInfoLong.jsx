import React from 'react'

export default function CountryInfoLong() {
    return (
        <div>
            {/* img goes here */}
            <h2>Country name</h2>
            <ul>
                <li>Native name: </li>
                <li>Population: </li>
                <li>Region: </li>
                <li>Sub Region: </li>
                <li>Capital: </li>
                <li>Top Level Domain: </li>
                <li>Currencies: </li>
                <li>Languages: </li>
            </ul>
            <h3>Border Countries: </h3>
            <div>this is where the neighbouring countries would go</div>
        </div>
    )
}