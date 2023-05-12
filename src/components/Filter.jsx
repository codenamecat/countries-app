import React from 'react'

export default function Filter() {
    return (
        <div>
            <select name="regions" id="regions">
                <option value='all'>Filter by region - All</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}