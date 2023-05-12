import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Filter from './components/Filter'
import CountryInfoShort from './components/CountryInfoShort'
import CountryInfoLong from './components/CountryInfoLong'

function App() {

  // React.useEffect(() => {
  //   fetch('MIKÄ LINKKI TÄHÄN OIKEEN TULEE MISTÄ LÖYDÄN UUDEN APIN')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       // console.log(data[0].flags.png)
  //       // console.log(data[0].name.common)
  //       // console.log(data[0].population)
  //       // console.log(data[0].region)
  //       // console.log(data[0].capital[0])
  //       // //for the individual view vv
  //       // console.log(data[0].name.nativeName) //this is a problem i will deal with later (fifa?)
  //       // console.log(data[0].subregion)
  //       // console.log(data[0].tld[0])
  //       // console.log(data[0].currencies) //same problem as above
  //       // console.log(data[0].languages) //3rd of the same problem
  //       // console.log(data[0].borders) //array, do stuff with that
  //     })
  // }, [])

  return (
    <>
      <Navbar />
      <Search />
      <Filter />
      <CountryInfoShort />
      <CountryInfoLong />
    </>
  )
}

export default App


// things needed from the data: 
// multiple countries view: flag, name, population, region, capital
// individual view: flag, name, native name, population, region, sub region, capital, top level doman, currencies, languages, border countries
