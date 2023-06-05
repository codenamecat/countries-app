import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import countryData from '../data.json'
import backArrow from '../images/arrow-back-outline.svg'

export default function CountryInfoLong() {
    const location = useLocation();
    const countryCode = location.state.countryCode;

    const country = countryData.find(item => item.alpha3Code === countryCode)
    console.log(country)
    const topLevelDomains = country.topLevelDomain.map(domain => {
        return <span key={domain}>{domain}</span>
    })

    const currencies = country.currencies?.map((currency, index) => {
        return <span key={currency.code}>{currency.name}{index < country.currencies.length - 1 ? ", " : ""}</span>
    })

    const languages = country.languages?.map((language, index) => {
        return <span key={language.name}>{language.name}{index < country.languages.length - 1 ? ", " : ""}</span>
    })

    const borderCountries = country.borders?.map(item => {
        return <button key={item}>{item}</button>
    })

    return (
        <div>
            <Link to="/">
                <button>
                    <img src={backArrow} className="back-arrow" />
                    Back
                </button>
            </Link>
            {/* img goes here */}
            <h2>{country.name}</h2>
            <ul>
                <li>Native name: {country.nativeName || "n/a"}</li>
                <li>Population: {country.population || "n/a"}</li>
                <li>Region: {country.region || "n/a"}</li>
                <li>Sub Region: {country.subregion || "n/a"}</li>
                <li>Capital: {country.capital || "n/a"}</li>
                <li>Top Level Domain: {topLevelDomains || "n/a"}</li>
                <li>Currencies: {currencies || "n/a"}</li>
                <li>Languages: {languages || "n/a"}</li>
            </ul>
            <h3>Border Countries: </h3>
            {borderCountries ? <div>{borderCountries}</div> : <p>No border countries!</p>}
        </div>
    )
}