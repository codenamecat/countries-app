import React from 'react'

import CountryInfoShort from './CountryInfoShort'
import data from '../data.json'
import searchIcon from '../images/search-outline.svg'

export default function CountryList() {

    const [countryData, setCountryData] = React.useState(data);

    const [regions, setRegions] = React.useState('all');

    function changeRegion(event) {
        const { value } = event.target;
        setRegions(value);

        if (value === 'all') {
            setCountryData(data);
            return;
        }

        const filteredData = data.filter(country => {
            return country.region === value;
         });
         setCountryData(filteredData);
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
        <div>
            <div>
                <img src={searchIcon} className="search-icon" />
                <input type="text" placeholder="Search for a country..." name="countrySearch" />
            </div>
            <div>
                <select name="regions" id="regions" value={regions} onChange={changeRegion}>
                    <option value="all">Filter by region - All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            {countryElements}
        </div>
    )
}