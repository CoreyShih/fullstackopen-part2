import CountryDetails from './CountryDetails'

const Country = ({ country, setFilter }) => {
  return (
    <div>
      {`${country.name.common} `}
      <button onClick={() => setFilter(country.name.common)}>Show</button>
    </div>
  )
}

const CountryDisplay = ({ countries, filter, setFilter }) => {
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase()))

  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map(country => <Country key={country.cca2} country={country} setFilter={setFilter} />)}
      </div>
    )
  } else if (filteredCountries.length === 1) {
    return <CountryDetails country={filteredCountries[0]} />
  }

  return null
}

export default CountryDisplay