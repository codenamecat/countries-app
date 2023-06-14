import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import countryData from '../data.json';
import backArrow from '../images/arrow-back-outline.svg';

export default function CountryInfoLong(props) {
    const location = useLocation();
    const countryCode = location.state.countryCode;

    const country = countryData.find((item) => item.alpha3Code === countryCode);

    const topLevelDomains = country.topLevelDomain.map((domain) => {
        return <span key={domain}>{domain}</span>;
    });

    const currencies = country.currencies?.map((currency, index) => {
        return (
            <span key={currency.code}>
                {currency.name}
                {index < country.currencies.length - 1 ? ', ' : ''}
            </span>
        );
    });

    const languages = country.languages?.map((language, index) => {
        return (
            <span key={language.name}>
                {language.name}
                {index < country.languages.length - 1 ? ', ' : ''}
            </span>
        );
    });

    const borderCountries = country.borders?.map((borderCountryCode) => {
        const borderCountry = countryData.find(
            (thisCountry) => thisCountry.alpha3Code === borderCountryCode
        );

        return (
            <Link to={`/${borderCountry.name}`} state={{ countryCode: borderCountryCode }} key={borderCountryCode}>
                <button className={props.darkMode ? 'dark' : ''}>{borderCountry.name}</button>
            </Link>
        );
    });

    const formatPopulation = new Intl.NumberFormat().format(country.population);

    return (
        <div className={`country-page ${props.darkMode ? 'dark' : ''}`}>
            <div className='back-btn-and-image'>
                <Link to='/' className='link-back'>
                    <button className={`back-btn ${props.darkMode ? 'dark' : ''}`}>
                        <img src={backArrow} className={`back-arrow ${props.darkMode ? 'dark' : ''}`} />
                        <span>Back</span>
                    </button>
                </Link>
                <img src={country.flags.svg} className={`flag-img-long ${props.darkMode ? 'dark' : ''}`} />
            </div>
            <div className='country-info-long'>
                <h2 className="country-name-long">{country.name}</h2>
                <ul>
                    <li><span className="data-title">Native name:</span> {country.nativeName || 'n/a'}</li>
                    <li><span className="data-title">Population:</span> {formatPopulation || 'n/a'}</li>
                    <li><span className="data-title">Region:</span> {country.region || 'n/a'}</li>
                    <li><span className="data-title">Sub Region:</span> {country.subregion || 'n/a'}</li>
                    <li><span className="data-title">Capital:</span> {country.capital || 'n/a'}</li>
                    <br />
                    <li><span className="data-title">Top Level Domain:</span> {topLevelDomains || 'n/a'}</li>
                    <li><span className="data-title">Currencies:</span> {currencies || 'n/a'}</li>
                    <li><span className="data-title">Languages:</span> {languages || 'n/a'}</li>
                </ul>
                <br />
                <h3 className="border-heading">Border Countries: </h3>
                {borderCountries ? (
                    <div className='border-countries-container'>{borderCountries}</div>
                ) : (
                    <p className='no-border-countries'>No border countries</p>
                )}
            </div>
        </div>
    );
}
