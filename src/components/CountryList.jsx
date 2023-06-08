import React from 'react'

import CountryInfoShort from './CountryInfoShort'
import data from '../data.json'
import searchIcon from '../images/search-outline.svg'

export default function CountryList() {

    const [countryData, setCountryData] = React.useState(data);

    const [regions, setRegions] = React.useState('all');

    const [countrySearch, setCountrySearch] = React.useState('');

    function changeRegion(event) {
        const { value } = event.target;
        setRegions(value);

        if (value === 'all') {
            setCountryData(data);
            return;
        }

        setCountrySearch('');

        const filteredData = data.filter(country => {
            return country.region === value;
        });
        setCountryData(filteredData);
    }

    function changeSearch(event) {
        const { value } = event.target;
        setCountrySearch(value);

        setRegions('all');

        const searchedData = data.filter(country => {
            return country.name.toLowerCase().startsWith(value);
        })

        setCountryData(searchedData);
    }

    const countryElements = countryData.map(country => {
        return (
            <CountryInfoShort
                key={country.name}
                name={country.name}
                flagImg={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital}
                code={country.alpha3Code}
            />
        )
    })

    return (
        <div className="country-list">
            <div>
                <img src={searchIcon} className="search-icon" />
                <input type="text" placeholder="Search for a country..." name="countrySearch" value={countrySearch} onChange={changeSearch} />
            </div>
            <div>
                <select name="regions" id="regions" value={regions} onChange={changeRegion}>
                    <option value="all">Filter by region - All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            {countryElements.length > 0 ? countryElements : <h2>No countries found</h2>}
        </div>
    )
}