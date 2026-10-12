import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountryDisplay from './components/CountryDisplay'
import countryService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(returnedCountries => setCountries(returnedCountries))
  }, [])

  const handleFilterChange = event => setFilter(event.target.value)
  
  return (
    <div>
      <Filter filter={filter} onChange={handleFilterChange} />
      <CountryDisplay countries={countries} filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default App