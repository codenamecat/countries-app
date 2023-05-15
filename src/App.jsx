import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Filter from './components/Filter'
import CountryInfoShort from './components/CountryInfoShort'
import CountryInfoLong from './components/CountryInfoLong'

function App() {

  const [countryData, setCountryData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then(res => res.json())
      .then(data => {
        setCountryData(data);
        // console.log(data[9])
        // console.log(data[9].flag)
        // console.log(data[9].name.common)
        // console.log(data[9].population) population data not available
        // console.log(data[9].region)
        // console.log(data[9].capital[0])
        //for the individual view vv
        // const nativeNameAbbr = Object.keys(data[9].name.native)[0];
        // console.log(nativeNameAbbr) //this is a problem i will deal with later (fifa?)
        // console.log(data[9].name.native[nativeNameAbbr].common)
        // console.log(data[9].subregion)
        // console.log(data[9].tld[0])
        // const currencyAbbr = Object.keys(data[9].currencies)[0]
        // console.log(data[9].currencies[currencyAbbr].name) //same problem as above
        // const languageAbbr = Object.keys(data[9].languages)[0]
        // console.log(data[9].languages[languageAbbr]) //3rd of the same problem
        // console.log(data[9].borders) //array, do stuff with that
      })
  }, [])

  const countryElements = countryData.map(country => {
    return (
      <CountryInfoShort
        key={country.name.common}
        name={country.name.common}
        region={country.region}
        capital={country.capital}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Search />
      <Filter />
      {countryElements}
      {/* <CountryInfoLong /> */}
    </>
  )
}

export default App


// things needed from the data: 
// multiple countries view: flag, name, population, region, capital
// individual view: flag, name, native name, population, region, sub region, capital, top level doman, currencies, languages, border countries
