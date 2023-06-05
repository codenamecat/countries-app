import React from 'react'

import CountryInfoShort from './CountryInfoShort'
import countryData from '../data.json'
import Search from './Search'
import Filter from './Filter'

export default function CountryList() {

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
            <Search />
            <Filter />
            {countryElements}
        </div>
    )
}